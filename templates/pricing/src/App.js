import React, { Component } from 'react';
import { Container } from 'bootstrap-4-react';

import { Menu, Intro, Pricing, Footer } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Intro />
        <Container>
          <Pricing />
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
