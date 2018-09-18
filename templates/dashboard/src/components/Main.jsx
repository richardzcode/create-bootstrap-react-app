import React, { Component } from 'react';
import { Col } from 'bootstrap-4-react';

import MainHeader from './MainHeader';
import MainChart from './MainChart';
import MainTable from './MainTable';

export default class Main extends Component {
  render() {
    return (
      <Col as="main" role="main" col="md-9 lg-10" ml="sm-auto" px="4">
        <MainHeader />
        <MainChart />
        <MainTable />
      </Col>
    )
  }
}
