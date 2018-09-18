import React, { Component } from 'react';
import { Jumbotron, Col, Display4, Lead, BA } from 'bootstrap-4-react';

export default class Jumbovision extends Component {
  render() {
    return (
      <Jumbotron p="3 md-5" text="white" bg="dark" rounded>
        <Col md="6" px="0">
          <Display4 font="italic">
            Title of a longer featured blog post
          </Display4>
          <Lead my="3">
            Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
          </Lead>
          <Lead mb="0">
            <BA text="white" fontWeight="bold" href="#">Continue reading...</BA>
          </Lead>
        </Col>
      </Jumbotron>
    )
  }
}
