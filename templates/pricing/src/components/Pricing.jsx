import React, { Component } from 'react';
import {
  Card,
  List,
  Button,
  BH4,
  BSmall
} from 'bootstrap-4-react';

const Free = props => (
  <Card mb="4" shadow="sm">
    <Card.Header>
      <BH4 my="0" fontWeight="normal">Free</BH4>
    </Card.Header>
    <Card.Body>
      <Card.Title as="h1">$0 <BSmall text="muted">/ mo</BSmall></Card.Title>
      <List unstyled mt="3" mb="4">
        <List.Item>10 users included</List.Item>
        <List.Item>2 GB of storage</List.Item>
        <List.Item>Email support</List.Item>
        <List.Item>Help center access</List.Item>
      </List>
      <Button block lg primary outline>Sign up for free</Button>
    </Card.Body>
  </Card>
)

const Pro = props => (
  <Card mb="4" shadow="sm">
    <Card.Header>
      <BH4 my="0" fontWeight="normal">Pro</BH4>
    </Card.Header>
    <Card.Body>
      <Card.Title as="h1">$15 <BSmall text="muted">/ mo</BSmall></Card.Title>
      <List unstyled mt="3" mb="4">
        <List.Item>20 users included</List.Item>
        <List.Item>10 GB of storage</List.Item>
        <List.Item>Priority email support</List.Item>
        <List.Item>Help center access</List.Item>
      </List>
      <Button block lg primary>Get started</Button>
    </Card.Body>
  </Card>
)

const Enterprise = props => (
  <Card mb="4" shadow="sm">
    <Card.Header>
      <BH4 my="0" fontWeight="normal">Enterprise</BH4>
    </Card.Header>
    <Card.Body>
      <Card.Title as="h1">$29 <BSmall text="muted">/ mo</BSmall></Card.Title>
      <List unstyled mt="3" mb="4">
        <List.Item>30 users included</List.Item>
        <List.Item>15 GB of storage</List.Item>
        <List.Item>Phone and email support</List.Item>
        <List.Item>Help center access</List.Item>
      </List>
      <Button block lg primary>Contact us</Button>
    </Card.Body>
  </Card>
)

export default class Pricing extends Component {
  render() {
    return (
      <Card.Deck mb="3" text="center">
        <Free />
        <Pro />
        <Enterprise />
      </Card.Deck>
    )
  }
}
