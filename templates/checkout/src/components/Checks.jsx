import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class Checks extends Component {
  render() {
    return (
      <React.Fragment>
        <Form.Check>
          <Form.CheckInput type="checkbox" id="same-address" />
          <label htmlFor="same-address">
            Shipping address is the same as my billing address
          </label>
        </Form.Check>
        <Form.Check>
          <Form.CheckInput type="checkbox" id="save-info" />
          <label htmlFor="save-info">
            Save this information for next time
          </label>
        </Form.Check>
      </React.Fragment>
    )
  }
}
