import React, { Component } from 'react';
import {
  Col,
  Nav,
  BSpan,
  BH6,
  BA
} from 'bootstrap-4-react';

const SideNav = props => (
  <Nav flex="column">
    <Nav.ItemLink href="#" active>
      <span data-feather="home"></span>
      Dashboard<BSpan srOnly>(current)</BSpan>
    </Nav.ItemLink>
    <Nav.ItemLink href="#">
      <span data-feather="file"></span>
      Orders
    </Nav.ItemLink>
    <Nav.ItemLink href="#">
      <span data-feather="shopping-cart"></span>
      Products
    </Nav.ItemLink>
    <Nav.ItemLink href="#">
      <span data-feather="users"></span>
      Customers
    </Nav.ItemLink>
    <Nav.ItemLink href="#">
      <span data-feather="bar-chart-2"></span>
      Reports
    </Nav.ItemLink>
    <Nav.ItemLink href="#">
      <span data-feather="layers"></span>
      Integrations
    </Nav.ItemLink>
  </Nav>
)

const SavedReports = props => (
  <React.Fragment>
    <BH6
      display="flex"
      justifyContent="between"
      alignItems="center"
      px="3"
      mt="4"
      mb="1"
      text="muted"
      className="sidebar-heading"
    >
      <span>Saved reports</span>
      <BA display="flex" alignItems="center" text="muted" href="#">
        <span data-feather="plus-circle"></span>
      </BA>
    </BH6>
    <Nav flex="column" mb="2">
      <Nav.ItemLink href="#">
        <span data-feather="file-text"></span>
        Current month
      </Nav.ItemLink>
      <Nav.ItemLink href="#">
        <span data-feather="file-text"></span>
        Last quarter
      </Nav.ItemLink>
      <Nav.ItemLink href="#">
        <span data-feather="file-text"></span>
        Social engagement
      </Nav.ItemLink>
      <Nav.ItemLink href="#">
        <span data-feather="file-text"></span>
        Year-end sale
      </Nav.ItemLink>
    </Nav>
  </React.Fragment>
)

export default class Sidebar extends Component {
  componentDidMount() {
    window.feather.replace();
  }

  render() {
    return (
      <Col as="nav" md="2" display="none md-block" bg="light" className="sidebar">
        <div className="sidebar-sticky">
          <SideNav />
          <SavedReports />
        </div>
      </Col>
    )
  }
}
