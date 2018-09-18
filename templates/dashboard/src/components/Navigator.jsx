import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Form
} from 'bootstrap-4-react';

export default class Navigator extends Component {
  render() {
    return (
      <Navbar dark bg="dark" fixed="top" flex="md-nowrap" p="0" shadow>
        <Navbar.Brand href="#" mr="0" className="col-sm-3 col-md-2">Company name</Navbar.Brand>
        <Form.Input className="form-control-dark" w="100" type="text" placeholder="Search" aria-label="Search" />
        <Navbar.Nav px="3">
          <Nav.Item text="nowrap">
            <Nav.Link href="#">Sign out</Nav.Link>
          </Nav.Item>
        </Navbar.Nav>
      </Navbar>
    )
  }
}
