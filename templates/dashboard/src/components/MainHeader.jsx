import React, { Component } from 'react';
import {
  BDiv,
  BH2,
  ButtonToolbar,
  ButtonGroup,
  Button
} from 'bootstrap-4-react';

export default class MainHeader extends Component {
  render() {
    return (
      <BDiv
        display="flex"
        flex="wrap md-nowrap"
        justifyContent="between"
        alignItems="center"
        pt="3"
        pb="2"
        mb="3"
        border="bottom"
      >
        <BH2>Dashboard</BH2>
        <ButtonToolbar mb="2 md-0">
          <ButtonGroup mr="2">
            <Button outline secondary sm>Share</Button>
            <Button outline secondary sm>Export</Button>
          </ButtonGroup>
          <Button outline secondary sm dropdownToggle>
            <span data-feather="calendar"></span>
            This week
          </Button>
        </ButtonToolbar>
      </BDiv>
    )
  }
}
