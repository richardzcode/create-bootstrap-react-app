import React, { Component } from 'react';
import { BDiv, BH4, BP, List } from 'bootstrap-4-react';

export default class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <BDiv p="3" mb="3" bg="light" rounded>
          <BH4 font="italic">About</BH4>
          <BP mb="0">
            Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
          </BP>
        </BDiv>
        <BDiv p="3">
          <BH4 font="italic">Archives</BH4>
          <List unstyled mb="0">
            <List.Item><a href="#">March 2014</a></List.Item>
            <List.Item><a href="#">Feburary 2014</a></List.Item>
            <List.Item><a href="#">Janurary 2014</a></List.Item>
            <List.Item><a href="#">December 2013</a></List.Item>
            <List.Item><a href="#">November 2013</a></List.Item>
            <List.Item><a href="#">October 2013</a></List.Item>
            <List.Item><a href="#">September 2013</a></List.Item>
            <List.Item><a href="#">August 2013</a></List.Item>
            <List.Item><a href="#">July 2013</a></List.Item>
            <List.Item><a href="#">June 2013</a></List.Item>
            <List.Item><a href="#">May 2013</a></List.Item>
            <List.Item><a href="#">April 2013</a></List.Item>
          </List>
        </BDiv>
        <BDiv p="3">
          <BH4 font="italic">Elsewhere</BH4>
            <List.Item><a href="#">GitHub</a></List.Item>
            <List.Item><a href="#">Twitter</a></List.Item>
            <List.Item><a href="#">Facebook</a></List.Item>
          <List unstyled>
          </List>
        </BDiv>
      </React.Fragment>
    )
  }
}
