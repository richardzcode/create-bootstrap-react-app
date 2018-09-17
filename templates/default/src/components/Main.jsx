import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

import Sidebar from './Sidebar';
import Content from './Content';

export default class Main extends Component {
  render() {
    return (
      <Container fluid>
        <Row flex="xl-nowrap">
          <Col col="12 md-3 xl-2" className="cbra-sidebar">
            <Sidebar />
          </Col>
          <Col col="12 md-9 xl-8" py="md-3" pl="md-5">
            <Content />
          </Col>
        </Row>
      </Container>
    )
  }
}
