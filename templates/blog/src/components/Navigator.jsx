import React, { Component } from 'react';
import { BDiv, Nav, BA } from 'bootstrap-4-react';

export default class Navigator extends Component {
  render() {
    return (
      <BDiv className="nav-scroller" py="1" mb="2">
        <Nav display="flex" justifyContent="between">
          <BA p="2" text="muted" href="#">World</BA>
          <BA p="2" text="muted" href="#">U.S.</BA>
          <BA p="2" text="muted" href="#">Technology</BA>
          <BA p="2" text="muted" href="#">Design</BA>
          <BA p="2" text="muted" href="#">Culture</BA>
          <BA p="2" text="muted" href="#">Business</BA>
          <BA p="2" text="muted" href="#">Politics</BA>
          <BA p="2" text="muted" href="#">Opinion</BA>
          <BA p="2" text="muted" href="#">Science</BA>
          <BA p="2" text="muted" href="#">Health</BA>
          <BA p="2" text="muted" href="#">Style</BA>
          <BA p="2" text="muted" href="#">Travel</BA>
        </Nav>
      </BDiv>
    )
  }
}
