import React, { Component } from 'react';
import { Row, Col, BImg, BP, Button } from 'bootstrap-4-react';

import { img_1x1 } from './images';

export default class Marketing extends Component {
  render() {
    return (
      <Row>
        <Col col="lg-4" className="carousel-marketing-item">
          <BImg src={img_1x1} rounded="circle" width="140" height="140" />
          <h2>Heading</h2>
          <BP mx="3">
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
          </BP>
          <Button secondary>View details &raquo;</Button>
        </Col>
        <Col col="lg-4" className="carousel-marketing-item">
          <BImg src={img_1x1} rounded="circle" width="140" height="140" />
          <h2>Heading</h2>
          <BP mx="3">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
          </BP>
          <Button secondary>View details &raquo;</Button>
        </Col>
        <Col col="lg-4" className="carousel-marketing-item">
          <BImg src={img_1x1} rounded="circle" width="140" height="140" />
          <h2>Heading</h2>
          <BP mx="3">
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
          </BP>
          <Button secondary>View details &raquo;</Button>
        </Col>
      </Row>
    )
  }
}
