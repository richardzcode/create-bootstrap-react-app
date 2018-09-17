import React, { Component } from 'react';
import { Jumbotron, Container, Lead, Button } from 'bootstrap-4-react';

export default class AlbumJumbotron extends Component {
  render() {
    return (
      <Jumbotron text="center" className="album-jumbotron">
        <Container>
          <h1>Album example</h1>
          <Lead text="muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don&#39;t simply skip over it entirely.</Lead>
        </Container>
        <p>
          <Button primary mx="1" my="2">Main call to action</Button>
          <Button secondary mx="1" my="2">Secondary action</Button>
        </p>
      </Jumbotron>
    )
  }
}
