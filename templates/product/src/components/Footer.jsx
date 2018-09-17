import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  List,
  BSmall,
  BA
} from 'bootstrap-4-react';

import Logo from './Logo';

const Features = props => (
  <Col col="6 md">
    <h5>Features</h5>
    <List unstyled>
      <List.Item><BA text="muted" href="#">Cool stuff</BA></List.Item>
      <List.Item><BA text="muted" href="#">Random feature</BA></List.Item>
      <List.Item><BA text="muted" href="#">Team feature</BA></List.Item>
      <List.Item><BA text="muted" href="#">Stuff for developers</BA></List.Item>
      <List.Item><BA text="muted" href="#">Another one</BA></List.Item>
      <List.Item><BA text="muted" href="#">Last time</BA></List.Item>
    </List>
  </Col>
)

const Resources = props => (
  <Col col="6 md">
    <h5>Resources</h5>
    <List unstyled>
      <List.Item><BA text="muted" href="#">Resource</BA></List.Item>
      <List.Item><BA text="muted" href="#">Resource name</BA></List.Item>
      <List.Item><BA text="muted" href="#">Another resource</BA></List.Item>
      <List.Item><BA text="muted" href="#">Final resource</BA></List.Item>
    </List>
  </Col>
)

const Resources2 = props => (
  <Col col="6 md">
    <h5>Resources</h5>
    <List unstyled>
      <List.Item><BA text="muted" href="#">Business</BA></List.Item>
      <List.Item><BA text="muted" href="#">Education</BA></List.Item>
      <List.Item><BA text="muted" href="#">Government</BA></List.Item>
      <List.Item><BA text="muted" href="#">Gaming</BA></List.Item>
    </List>
  </Col>
)

const About = props => (
  <Col col="6 md">
    <h5>About</h5>
    <List unstyled>
      <List.Item><BA text="muted" href="#">Team</BA></List.Item>
      <List.Item><BA text="muted" href="#">Locations</BA></List.Item>
      <List.Item><BA text="muted" href="#">Privacy</BA></List.Item>
      <List.Item><BA text="muted" href="#">Terms</BA></List.Item>
    </List>
  </Col>
)

export default class Footer extends Component {
  render() {
    return (
      <Container as="footer" py="5">
        <Row>
          <Col col="12 md">
            <Logo />
            <BSmall display="block" mb="3" text="muted">&copy; 2017-2018</BSmall>
          </Col>
          <Features />
          <Resources />
          <Resources2 />
          <About />
        </Row>
      </Container>
    )
  }
}
