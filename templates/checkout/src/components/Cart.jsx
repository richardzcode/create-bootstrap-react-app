import React, { Component } from 'react';
import {
  ListGroup,
  Badge,
  Form,
  InputGroup,
  Button,
  BH4,
  BH6,
  BDiv,
  BSpan,
  BSmall
} from 'bootstrap-4-react';

const CartItem = props => (
  <ListGroup.Item display="flex" justifyContent="between" className="checkout-cart-item">
    {props.children}
  </ListGroup.Item>
)

const ProductItem = props => (
  <CartItem>
    <div>
      <BH6 my="0">{props.name}</BH6>
      <BSmall text="muted">{props.description}</BSmall>
    </div>
    <BSpan text="muted">{props.price}</BSpan>
  </CartItem>
)

export default class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <BH4 display="flex" justifyContent="between" alignItems="center" mb="3">
          <BSpan text="muted">Your cart</BSpan>
          <Badge secondary pill>3</Badge>
        </BH4>
        <ListGroup mb="3">
          <ProductItem name="Product name" description="Brief description" price="$12" />
          <ProductItem name="Second product" description="Brief description" price="$8" />
          <ProductItem name="Third product" description="Brief description" price="$5" />
          <CartItem>
            <BDiv text="success">
              <BH6 my="0">Promo code</BH6>
              <BSmall>EXAMPLECODE</BSmall>
            </BDiv>
            <BSpan text="success">-$5</BSpan>
          </CartItem>
          <CartItem>
            <span>Total (USD)</span>
            <strong>$20</strong>
          </CartItem>
        </ListGroup>
        <Form className="card" p="2">
          <InputGroup>
            <Form.Input placeholder="Promo code" />
            <InputGroup.Append>
              <Button type="submit" secondary>Redeem</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </React.Fragment>
    )
  }
}
