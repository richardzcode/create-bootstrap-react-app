import React, { Component } from 'react';
import { BDiv, Lead, Button } from 'bootstrap-4-react';

export default class Main extends Component {
  render() {
    return (
      <BDiv role="main" className="cover-main">
        <h1>Cover your page.</h1>
        <Lead>
          Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.
        </Lead>
        <Lead>
          <Button as="a" href="#" secondary lg>Learn more</Button>
        </Lead>
      </BDiv>
    )
  }
}
