import React, { Component } from 'react';
import {
  Container,
  BSvg,
  BA,
  BNav
} from 'bootstrap-4-react';

import Logo from './Logo';

const MenuItem = props => (
  <BA py="2" display="none md-inline-block" href="#">
    {props.children}
  </BA>
)

export default class Menu extends Component {
  render() {
    return (
      <BNav sticky="top" py="1" className="product-header">
        <Container display="flex" flex="column md-row" justifyContent="between">
          <BA py="2" href="#">
            <Logo />
          </BA>
          <MenuItem>Tour</MenuItem>
          <MenuItem>Product</MenuItem>
          <MenuItem>Features</MenuItem>
          <MenuItem>Enterprise</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>Pricing</MenuItem>
          <MenuItem>Cart</MenuItem>
        </Container>
      </BNav>
    )
  }
}
