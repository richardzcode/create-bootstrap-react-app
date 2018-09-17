import React, { Component } from 'react';
import { BDiv, BH5, Nav, Button } from 'bootstrap-4-react';

export default class Menu extends Component {
  render() {
    return (
      <BDiv
        display="flex"
        flex="column md-row"
        alignItems="center"
        p="3"
        px="md-4"
        mb="3"
        bg="white"
        border="bottom"
        shadow="sm"
      >
        <BH5 my="0" mr="md-auto" fontWeight="normal">Company name</BH5>
        <Nav my="2 md-0" mr="md-3">
          <Nav.Item><Nav.Link p="2" text="dark" href="#">Features</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link p="2" text="dark" href="#">Enterprise</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link p="2" text="dark" href="#">Support</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link p="2" text="dark" href="#">Pricing</Nav.Link></Nav.Item>
        </Nav>
        <Button primary outline>Sign up</Button>
      </BDiv>
    )
  }
}
