import React, { Component } from 'react';
import { BDiv, BImg, BH2, Lead } from 'bootstrap-4-react';

export default class Intro extends Component {
  render() {
    return (
      <BDiv py="5" text="center">
        <BImg
          display="block"
          mx="auto"
          mb="4"
          src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg"
          width="72"
          height="72"
        />
        <BH2>Checkout form</BH2>
        <Lead>Below is an example form built entirely with Bootstrap&#39;s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</Lead>
      </BDiv>
    )
  }
}
