import React, { Component } from 'react';
import {
  Col,
  Card,
  ButtonGroup,
  Button,
  BDiv,
  BSmall
} from 'bootstrap-4-react';

const thumbnailSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22508%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20508%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16544932167%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16544932167%22%3E%3Crect%20width%3D%22508%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22169.7578125%22%20y%3D%22123.9%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

export default class AlbumCard extends Component {
  render() {
    return (
      <Col md="4">
        <Card mb="4" shadow="sm">
          <Card.Image top src={thumbnailSrc} />
          <Card.Body>
            <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
            <BDiv display="flex" justifyContent="between" alignItems="center">
              <ButtonGroup>
                <Button secondary outline sm>View</Button>
                <Button secondary outline sm>Edit</Button>
              </ButtonGroup>
              <BSmall text="muted">9 mins</BSmall>
            </BDiv>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
