import React, { Component } from 'react';
import {
  BFooter,
  Row,
  Col,
  List,
  BH5,
  BImg,
  BSmall,
  BA
} from 'bootstrap-4-react';

const CopyRight = props => (
  <Col col="12 md">
    <BImg
      mb="2"
      src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg"
      width="24"
      height="24"
    />
    <BSmall display="block" mb="3" text="muted">&copy; 2017-2018</BSmall>
  </Col>
)

const Features = props => (
  <Col col="6 md">
    <BH5>Features</BH5>
    <List unstyled text="small">
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
    <BH5>Resources</BH5>
    <List unstyled text="small">
      <List.Item><BA text="muted" href="#">Resource</BA></List.Item>
      <List.Item><BA text="muted" href="#">Resource name</BA></List.Item>
      <List.Item><BA text="muted" href="#">Another resource</BA></List.Item>
      <List.Item><BA text="muted" href="#">Final resource</BA></List.Item>
    </List>
  </Col>
)

const About = props => (
  <Col col="6 md">
    <BH5>About</BH5>
    <List unstyled text="small">
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
      <BFooter pt="4 md-5" my="md-5" border="top">
        <Row>
          <CopyRight />
          <Features />
          <Resources />
          <About />
        </Row>
      </BFooter>
    )
  }
}
