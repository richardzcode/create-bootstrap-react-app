import React, { Component } from 'react';
import { BDiv, Lead } from 'bootstrap-4-react';

const Headline = props => (
  <BDiv bg={props.bg} mr="md-3" pt="3 md-5" px="3 md-5" text={props.text} overflow="hidden" className="product-headline">
    <BDiv my="3" py="3">
      <h2>Another headline</h2>
      <Lead>And an even wittier subheading.</Lead>
      <BDiv bg={props.device.bg} shadow="sm" mx="auto" className="product-headline-device" />
    </BDiv>
  </BDiv>
)

export default class Headlines extends Component {
  render() {
    return (
      <React.Fragment>
        <BDiv display="md-flex" w="100" my="md-3" pl="md-3">
          <Headline bg="dark" text="center white" device={{ bg: "light" }} />
          <Headline bg="light" text="center" device={{ bg: "dark" }} />
        </BDiv>
        <BDiv display="md-flex" w="100" my="md-3" pl="md-3">
          <Headline bg="light" text="center" device={{ bg: "dark" }} />
          <Headline bg="primary" text="center white" device={{ bg: "light" }} />
        </BDiv>
        <BDiv display="md-flex" w="100" my="md-3" pl="md-3">
          <Headline bg="light" text="center" device={{ bg: "white" }} />
          <Headline bg="light" text="center" device={{ bg: "white" }} />
        </BDiv>
        <BDiv display="md-flex" w="100" my="md-3" pl="md-3">
          <Headline bg="light" text="center" device={{ bg: "white" }} />
          <Headline bg="light" text="center" device={{ bg: "white" }} />
        </BDiv>
      </React.Fragment>
    )
  }
}
