import React, { Component } from 'react';
import {
  Collapse,
  Container,
  Row,
  Col,
  List,
  Navbar,
  BH4,
  BP,
  BA,
  BSvg
} from 'bootstrap-4-react';

const Logo = props => (
  <BSvg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    mr="2"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  </BSvg>
)

export default class AlbumHeader extends Component {
  render() {
    return (
      <header>
        <Collapse bg="dark" id="navbarHeader">
          <Container>
            <Row>
              <Col col="sm-8 md-4" py="4">
                <BH4 text="white">About</BH4>
                <BP text="muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</BP>
              </Col>
              <Col sm="4" offset="md-1" py="4">
                <BH4 text="white">Contact</BH4>
                <List unstyled>
                  <List.Item><BA href="#" text="white">Follow on Twitter</BA></List.Item>
                  <List.Item><BA href="#" text="white">Like on Facebook</BA></List.Item>
                  <List.Item><BA href="#" text="white">Email me</BA></List.Item>
                </List>
              </Col>
            </Row>
          </Container>
        </Collapse>
        <Navbar dark bg="dark" shadow="sm">
          <Container display="flex" justifyContent="between">
            <Navbar.Brand href="#" display="flex" alignItems="center">
              <Logo />
              <strong>Album</strong>
            </Navbar.Brand>
            <Navbar.Toggler
              target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-label="Toggle navigation"
            />
          </Container>
        </Navbar>
      </header>
    )
  }
}
