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

function readFile(file) {
  if (!fs.existsSync(file)) { return ''; }

  return fs.readFileSync(file, { encoding: 'utf8' });
}

function files(dir) {
  return glob.sync(path.join(dir, '**'), { dot: true })
    .filter(file => !fs.lstatSync(file).isDirectory());
}

function dirs(dir) {
  return glob.sync(path.join(dir, '*'), { dot: true })
    .filter(file => fs.lstatSync(file).isDirectory());
}

function copyFile(src, dest) {
  fs.mkdirsSync(dest.replace(new RegExp('/[^/]*$'), ''));
  fs.copySync(src, dest);
}

function listTemplates() {
  const lines = dirs(templatesRoot)
    .map(dir => dir.replace(templatesRoot, '').slice(1))
    .map(name => chalk.green('    ' + name));
  log(
    ['List of templates:'].concat(lines)
  );
}

function showTemplate(template) {
  const templateRoot = path.join(templatesRoot, template);
  if (!fileExists(templateRoot)) {
    log('Template ' + chalk.yellow(template) + ' does not exist');
    return;
  }

  const templateReadMe = path.join(templateRoot, 'template.md');
  if (!fileExists(templateReadMe)) {
    log('Template ' + chalk.yellow(template) + ' does not have readme. i.e. /template.md');
    return;
  }

  const lines = readFile(templateReadMe)
    .split('\n')
    .map(line => '  ' + line);
  log(lines);
}

/*** checking ***/
let projectName = '';
function parseArgs() {
  program
    .arguments('<project-directory>')
    .action(name => projectName = name)
    .option('--use-npm')
    .option('-t --template [value]', 'template name')
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
const useNpm = program.useNpm || !hasYarn();
let template = program.template;

const cbra = moduleInfo('create-bootstrap-react-app');
const templatesRoot = path.join(cbra.location, 'templates');

if (!projectName) {
  if (template) {
    if (template === true) {
      listTemplates();
    } else {
      showTemplate(template);
    }
  }

  log([
    'Please specify the project directory:',
    '  ' + chalk.cyan('create-bootstrap-react-app ') + chalk.green('<project-directory>'),
    '',
    'For example:',
    '  ' + chalk.cyan('create-bootstrap-react-app ') +  chalk.green('my-bootstrap-react-app')
  ])
  process.exit(1);
}

const nodeVersion = process.versions.node;
const craVersion = moduleVersion('create-react-app');
template = template || 'starter';

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
log('Copying template');

const CWD = process.cwd();
const projectRoot = path.join(CWD, projectName);

let templateRoot = path.join(templatesRoot, template);
if (!fileExists(templateRoot)) {
  log('Template ' + chalk.yellow(template) + ' does not exist, use starter');
  template = 'starter';
  templateRoot = path.join(templatesRoot, template);
}

files(templateRoot)
  .filter(file => !file.endsWith('template.md'))
  .forEach(file => {
    const dest = file.replace(templateRoot, projectRoot);
    copyFile(file, dest);
  });

/*** success ***/
log([
  'Success! Created ' + projectName + ' at ' + projectRoot,
  'Inside that directory, you can run several commends:',
  '',
  '  ' + chalk.cyan('npm start'),
  '    Starts that development server.',
  '',
  '  ' + chalk.cyan('npm run build'),
  '    Bundles the app into static files for production.',
  '',
  '  ' + chalk.cyan('npm test'),
  '    Starts the test runner.',
  '',
  '  ' + chalk.cyan('npm run eject'),
  '    Removes this tool and copies build dependencies, configuration files',
  '    and scripts into the app directory. If you do this, you can’t go back!',
  '',
  'We suggest that you begin by typing:',
  '',
  '  ' + chalk.cyan('cd') + ' ' + projectName,
  '  ' + chalk.cyan('npm start'),
  '',
  'Happy hacking!'
]);

