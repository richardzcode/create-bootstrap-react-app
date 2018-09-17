import React, { Component } from 'react';
import { BDiv, Display4, Lead } from 'bootstrap-4-react';

export default class Intro extends Component {
  render() {
    return (
      <BDiv px="3" py="3" pt="md-5" pb="md-4" mx="auto" text="center" className="pricing-header">
        <Display4>Pricing</Display4>
        <Lead>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It&#39;s built with default Bootstrap components and utilities with little customization.</Lead>
      </BDiv>
    )
  }
}
