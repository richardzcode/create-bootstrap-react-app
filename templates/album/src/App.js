import React, { Component } from 'react';
import { Container, Row, BDiv } from 'bootstrap-4-react';

import { AlbumCard, AlbumHeader, AlbumFooter, AlbumJumbotron } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AlbumHeader />
        <main role="main">
          <AlbumJumbotron />
          <BDiv py="5" bg="light">
            <Container>
              <Row>
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
              </Row>
            </Container>
          </BDiv>
        </main>
        <AlbumFooter />
      </React.Fragment>
    );
  }
}

export default App;
