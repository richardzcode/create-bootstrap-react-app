import React, { Component } from 'react';
import { BFooter, BP, List } from 'bootstrap-4-react';

export default class Footer extends Component {
  render() {
    return (
      <BFooter my="5" pt="5" text="muted center small">
        <BP mb="1">&copy; 2017-2018 Company Name</BP>
        <List inline>
          <List.Item inline><a href="#">Privacy</a></List.Item>
          <List.Item inline><a href="#">Terms</a></List.Item>
          <List.Item inline><a href="#">Support</a></List.Item>
        </List>
      </BFooter>
    )
  }
}
