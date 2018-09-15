import React, { Component } from 'react';
import {
  Form,
  Button,
  Collapse,
  Nav,
  BDiv,
  BSvg,
  BA
} from 'bootstrap-4-react';

export default class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <BDiv display="flex" alignItems="start" className="bd-search">
          <Form.Input
            id="search-input"
            placeholder="Search..."
            aria-label="Search for..."
            autoComplete="off"
          />
          <Button
            display="md-none"
            p="0"
            ml="3"
            data-toggle="collapse"
            data-target="#bd-side-nav"
            aria-controls="bd-side-nav"
            aria-expanded="false"
            aria-label="Toggle side navigation"
          >
            <BSvg viewBox="0 0 30 30" width="30" height="30" focusable="false">
              <title>Menu</title>
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </BSvg>
          </Button>
        </BDiv>
        <Collapse mb="3" className="bd-links" id="bd-side-nav">
          <BDiv className="bd-toc-item" active>
            <BA className="bd-toc-link" href="#/getting-started">Getting started</BA>
          </BDiv>
          <Nav display="block">
            <Nav.Item active>
              <Nav.Link href='#/getting-started/introduction'>Introduction</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#/getting-started/quick-start'>Quick start</Nav.Link>
            </Nav.Item>
          </Nav>
          <BDiv className="bd-toc-item">
            <BA className="bd-toc-link" href="#/components">Components</BA>
          </BDiv>
          <BDiv className="bd-toc-item">
            <BA className="bd-toc-link" href="#/utilities">Utilities</BA>
          </BDiv>
        </Collapse>
      </React.Fragment>
    )
  }
}
