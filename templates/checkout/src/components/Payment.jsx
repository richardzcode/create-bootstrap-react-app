import React, { Component } from 'react';
import {
  BH4,
  BDiv,
  Form,
  Row,
  Col
} from 'bootstrap-4-react';

export default class Payment extends Component {
  render() {
    return (
      <React.Fragment>
        <BH4 mb="3">Payment</BH4>
        <BDiv display="block" my="3">
          <Form.Check>
            <Form.CheckInput type="radio" id="credit" name="paymentMethod" defaultChecked required />
            <label htmlFor="credit">Credit card</label>
          </Form.Check>
          <Form.Check>
            <Form.CheckInput type="radio" id="debit" name="paymentMethod" required />
            <label htmlFor="credit">Debit card</label>
          </Form.Check>
          <Form.Check>
            <Form.CheckInput type="radio" id="paypal" name="paymentMethod" required />
            <label htmlFor="paypal">Paypal</label>
          </Form.Check>
        </BDiv>
        <Row>
          <Col md="6" mb="3">
            <label htmlFor="cc-name">Name on card</label>
            <Form.Input id="cc-name" required />
            <Form.Feedback invalid>Name on card is required.</Form.Feedback>
          </Col>
          <Col md="6" mb="3">
            <label htmlFor="cc-number">Credit card number</label>
            <Form.Input id="cc-number" required />
            <Form.Feedback invalid>Credit card number is required.</Form.Feedback>
          </Col>
        </Row>
        <Row>
          <Col md="3" mb="3">
            <label htmlFor="cc-expiration">Expiration</label>
            <Form.Input id="cc-expiration" required />
            <Form.Feedback invalid>Expiration date required.</Form.Feedback>
          </Col>
          <Col md="3" mb="3">
            <label htmlFor="cc-cvv">CVV</label>
            <Form.Input id="cc-cvv" required />
            <Form.Feedback invalid>Security code required.</Form.Feedback>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
