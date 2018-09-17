import React, { Component } from 'react';

import { Menu, Product, Headlines, Footer } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Product />
        <Headlines />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
