import React, { Component } from 'react';
import {
  BSvg,
  BHeader,
  Row,
  Col,
  BA,
  Button
} from 'bootstrap-4-react';

const SearchIcon = props => (
  <BSvg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    mx="3"
  >
    <circle cx="10.5" cy="10.5" r="7.5"></circle>
    <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
  </BSvg>
)

export default class Header extends Component {
  render() {
    return (
      <BHeader py="3" className="blog-header">
        <Row flex="nowrap" justifyContent="between" alignItems="center">
          <Col col="4" pt="1">
            <BA text="muted" href="#">Subscribe</BA>
          </Col>
          <Col col="4" text="center">
            <BA text="dark" href="#" className="blog-header-logo">Large</BA>
          </Col>
          <Col col="4" display="flex" justifyContent="end" alignItems="center">
            <BA text="muted" href="#"><SearchIcon /></BA>
            <Button sm outline secondary>Sign up</Button>
          </Col>
        </Row>
      </BHeader>
    )
  }
}
