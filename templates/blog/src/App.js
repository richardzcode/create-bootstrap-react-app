import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

import {
  Header,
  Navigator,
  Jumbovision,
  Featured,
  Blog,
  Sidebar,
  Footer
} from './components';
import './App.css';

const Top = props => (
  <Container>
    <Header />
    <Navigator />
    <Jumbovision />
    <Featured />
  </Container>
)

const Main = props => (
  <Container as="main">
    <Row>
      <Col md="8">
        <Blog />
      </Col>
      <Col md="4" as="aside">
        <Sidebar />
      </Col>
    </Row>
  </Container>
)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Top />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
