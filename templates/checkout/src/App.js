import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  BHr
} from 'bootstrap-4-react';

import {
  Intro,
  Cart,
  Billing,
  Checks,
  Payment,
  Footer
} from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="checkout-container">
          <Intro />
          <Row>
            <Col col="md-4" order="md-2" mb="4">
              <Cart />
            </Col>
            <Col md="8" order="md-1">
              <Form needsValidation noValidate>
                <Billing />
                <BHr mb="4" />
                <Checks />
                <BHr mb="4" />
                <Payment />
                <BHr mb="4" />
                <Button primary lg block type="submit">Continue to checkout</Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
