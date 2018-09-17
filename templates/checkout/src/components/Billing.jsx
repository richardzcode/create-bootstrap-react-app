import React, { Component } from 'react';
import {
  Row,
  Col,
  Form,
  InputGroup,
  BH4,
  BDiv,
  BSpan
} from 'bootstrap-4-react';

export default class Billing extends Component {
  render() {
    return (
      <React.Fragment>
        <BH4 mb="3">Billing address</BH4>
        <Row>
          <Col md="6" mb="3">
            <label htmlFor="firstName">First name</label>
            <Form.Input id="firstName" required />
            <Form.Feedback invalid>Valid first name is required.</Form.Feedback>
          </Col>
          <Col md="6" mb="3">
            <label htmlFor="lastName">Last name</label>
            <Form.Input id="lastName" required />
            <Form.Feedback invalid>Valid last name is required.</Form.Feedback>
          </Col>
        </Row>
        <BDiv mb="3">
          <label htmlFor="username">Username</label>
          <InputGroup>
            <InputGroup.Prepend><InputGroup.Text>@</InputGroup.Text></InputGroup.Prepend>
            <Form.Input id="username" placeholder="Username" required />
            <Form.Feedback invalid>Your username is required.</Form.Feedback>
          </InputGroup>
        </BDiv>
        <BDiv mb="3">
          <label htmlFor="email">Email</label>
          <Form.Input type="email" id="email" placeholder="you@example.com" />
          <Form.Feedback invalid>Please enter a valid email address for shipping updates.</Form.Feedback>
        </BDiv>
        <BDiv mb="3">
          <label htmlFor="address">Address</label>
          <Form.Input type="text" id="address" placeholder="1234 Main St" />
          <Form.Feedback invalid>Please enter your shipping address.</Form.Feedback>
        </BDiv>
        <BDiv mb="3">
          <label htmlFor="address2">Address 2<BSpan text="muted">(Optional)</BSpan></label>
          <Form.Input type="text" id="address2" placeholder="Apartment or suite" />
        </BDiv>
        <Row>
          <Col md="5" mb="3">
            <label htmlFor="country">Country</label>
            <Form.Select display="block" w="100" id="country" required>
              <option value="">Choose...</option>
              <option>United States</option>
            </Form.Select>
            <Form.Feedback invalid>Please select a valid country.</Form.Feedback>
          </Col>
          <Col md="4" mb="3">
            <label htmlFor="state">State</label>
            <Form.Select display="block" w="100" id="state" required>
              <option value="">Choose...</option>
              <option>California</option>
            </Form.Select>
            <Form.Feedback invalid>Please provide a valid state.</Form.Feedback>
          </Col>
          <Col md="3" mb="3">
            <label htmlFor="zip">Zip</label>
            <Form.Input type="text" id="zip" required />
            <Form.Feedback invalid>Zip code required.</Form.Feedback>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
