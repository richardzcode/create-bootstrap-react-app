import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  BSpan,
  Form,
  Button
} from 'bootstrap-4-react';

export default class Menu extends Component {
  render() {
    return (
      <Navbar expand="md" dark fixed="top" bg="dark">
        <Navbar.Brand href="#">Carousel</Navbar.Brand>
        <Navbar.Toggler
          target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse id="navbarCollapse">
          <Navbar.Nav mr="auto">
            <Nav.ItemLink href="#" active>Home <BSpan srOnly>(current)</BSpan></Nav.ItemLink>
            <Nav.ItemLink href="#">Link</Nav.ItemLink>
            <Nav.ItemLink href="#" disabled>Disabled</Nav.ItemLink>
          </Navbar.Nav>
          <Form inline mt="2 md-0">
            <Form.Input mr="sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button outline success my="2 sm-0" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
