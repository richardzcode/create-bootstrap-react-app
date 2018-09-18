import React, { Component } from 'react';
import { Container, Row } from 'bootstrap-4-react';

import {
  Navigator,
  Sidebar,
  Main
} from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigator />
        <Container fluid>
          <Row>
            <Sidebar />
            <Main />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
