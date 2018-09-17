import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

import { Menu, Main, Footer } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <BDiv
        display="flex"
        flex="column"
        w="100"
        h="100"
        p="3"
        mx="auto"
        className="cover-container"
      >
        <Menu />
        <Main />
        <Footer />
      </BDiv>
    );
  }
}

export default App;
