import React, { Component } from 'react';
import { BFooter, Container, BP } from 'bootstrap-4-react';

export default class AlbumFooter extends Component {
  render() {
    return (
      <BFooter text="muted">
        <Container>
          <BP float="right"><a href="#">Back to top</a></BP>
          <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
          <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
        </Container>
      </BFooter>
    )
  }
}
