import React, { Component } from 'react';
import {
  BHeader,
  Nav
} from 'bootstrap-4-react';

export default class Menu extends Component {
  render() {
    return (
      <BHeader mb="auto">
        <h3 className="cover-brand">Cover</h3>
        <Nav justifyContent="center">
          <Nav.Link href="#" active>Home</Nav.Link>
          <Nav.Link href="#">Features</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </BHeader>
    )
  }
}
