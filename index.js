#!/usr/bin/env node

'use strict'

var program = require('commander');

var path = require('path'),
    fs = require('fs-extra'),
    glob = require('glob'),
    chalk = require('chalk'),
    shell = require('shelljs');

/*** functions ***/
function log(lines) {
  lines = [].concat(lines);
  console.log('\n' + lines.join('\n'));
}

function execOut(cmd, options) {
  const res = shell.exec(cmd, options);
  return res.stdout;
}

function execCode(cmd, options) {
  const res = shell.exec(cmd, options);
  return res.code;
}

function fileExists(file) {
  return fs.existsSync(file);
}

function files(dir) {
  return glob.sync(path.join(dir, '**'), { dot: true })
    .filter(file => !fs.lstatSync(file).isDirectory());
}

function copyFile(src, dest) {
  fs.mkdirsSync(dest.replace(new RegExp('/[^/]*$'), ''));
  fs.copySync(src, dest);
}

/*** checking ***/
let projectName = '';
function parseArgs() {
  program
    .arguments('<project-directory>')
    .action(name => projectName = name)
    .option('--use-npm')
    .option('--template [value]', 'template name')
    .parse(process.argv);
}

function moduleInfo(module) {
  let out = execOut('npm list --global --depth=0 ' + module, { silent: true});
  if (!out || out.indexOf(module) < 0) {
    out = execOut('npm list --depth=0 ' + module, { silent: true});
  }
  if (!out || out.indexOf(module) < 0) {
    return null;
  }

  const lines = out.split('\n');
  const moduleRoot = lines[0];
  const moduleLines = lines
    .filter(line => line.indexOf(module) >= 0)
  const version = moduleLines[0].split('@')[1].trim();

  return {
    location: path.join(moduleRoot, 'node_modules', module),
    version: version
  }
}

function moduleVersion(module) {
  const info = moduleInfo(module);
  return info? info.version : '';
}

function hasYarn() {
  let out = execOut('which yarn', { silent: true});
  return !!out;
}

parseArgs();

if (!projectName) {
  log([
    'Please specify the project directory:',
    '  ' + chalk.cyan('create-bootstrap-react-app ') + chalk.green('<project-directory>'),
    '',
    'For example:',
    '  ' + chalk.cyan('create-bootstrap-react-app ') +  chalk.green('my-react-app')
  ])
  process.exit(1);
}

const nodeVersion = process.versions.node;
const craVersion = moduleVersion('create-react-app');
const useNpm = program.useNpm || !hasYarn();
let template = program.template || 'default';

log([
  chalk.cyan('Node version: ') + nodeVersion,
  chalk.cyan('create-react-app version: ') + craVersion
]);

if (!craVersion) {
  log([
    chalk.red('Requires Create React App'),
    '  Please install with command: ' + chalk.cyan('npm install -g create-react-app')
  ]);
}

/*** create react app ***/
function createApp() {
  return execCode('create-react-app ' + projectName);
}

log('');
const cra_ok = (createApp() === 0);

if (!cra_ok) {
  log([
    chalk.cyan('create-react-app') + chalk.yellow(' was not successful. Check the error and try again.')
  ]);
  process.exit(1);
}

/*** bootrap-4-react ***/
console.log('Installing bootstrap-4-react');
shell.cd(projectName);
if (useNpm) {
  execCode('npm install --save bootstrap-4-react');
} else {
  execCode('yarn add bootstrap-4-react');
}
shell.cd('..');

/*** copy template ***/
const CWD = process.cwd();
const projectRoot = path.join(CWD, projectName);

const cbra = moduleInfo('create-bootstrap-react-app');
let templateRoot = path.join(cbra.location, 'templates', template);
if (!fileExists(templateRoot)) {
  log('Template ' + chalk.yellow(template) + ' does not exist, use default');
  template = 'default';
  templateRoot = path.join(cbra.location, 'templates', template);
}

files(templateRoot)
  .forEach(file => {
    const dest = file.replace(templateRoot, projectRoot);
    copyFile(file, dest);
  });

log('Enjoy!');

