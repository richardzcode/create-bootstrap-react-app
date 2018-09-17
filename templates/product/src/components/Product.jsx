import React, { Component } from 'react';
import {
  BDiv,
  Col,
  Display4,
  Lead,
  Button
} from 'bootstrap-4-react';

export default class Product extends Component {
  render() {
    return (
      <BDiv
        position="relative"
        p="3 md-5"
        m="md-3"
        text="center"
        bg="light"
        className="product-product"
      >
        <Col col="md-5" p="lg-5" mx="auto" my="5">
          <Display4 fontWeight="normal">Punny headline</Display4>
          <Lead fontWeight="normal">
            And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple marketing pages.
          </Lead>
          <Button as="a" href="#" outline secondary>Coming soon</Button>
        </Col>
        <BDiv shadow="sm" display="none md-block" className="product-device" />
        <BDiv shadow="sm" display="none md-block" className="product-device2" />
      </BDiv>
    )
  }
}
