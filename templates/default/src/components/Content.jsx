import React, { Component } from 'react';
import { Container, Display4, Lead } from 'bootstrap-4-react';

export default class Content extends Component {
  render() {
    return (
      <Container>
        <Display4>Introduction</Display4>
        <Lead>Simpliest way to build frontend with Bootstrap 4 + React.</Lead>
      </Container>
    )
  }
}
