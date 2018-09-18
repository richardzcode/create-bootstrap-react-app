import React, { Component } from 'react';
import { Container, BP } from 'bootstrap-4-react';

export default class Footer extends Component {
  render() {
    return (
      <Container as="footer">
        <BP float="right"><a href="#">Back to top</a></BP>
        <p>&copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </Container>
    )
  }
}
