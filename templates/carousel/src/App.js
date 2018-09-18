import React, { Component } from 'react';
import Bootstrap, { Container } from 'bootstrap-4-react';

import { Menu, MyCarousel, Marketing, Featurette, Footer } from './components';
import './App.css';

class App extends Component {
  componentDidMount() {
    Bootstrap.carousel();
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <Menu />
        </header>
        <main role="main">
          <MyCarousel />
          <Container className="carousel-marketing">
            <Marketing />
            <Featurette />
          </Container>
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
