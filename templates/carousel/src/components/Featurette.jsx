import React, { Component } from 'react';
import { Row, Col, Lead, BImg, BSpan } from 'bootstrap-4-react';

import { img_500x500 } from './images';

export default class Featurette extends Component {
  render() {
    return (
      <div className="carousel-featurette">
        <hr className="carousel-featurette-divider" />
        <Row>
          <Col col="md-7">
            <h2>First featurette heading. <BSpan text="muted">It will blow your mind.</BSpan></h2>
            <Lead>
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
            </Lead>
          </Col>
          <Col col="md-5">
            <BImg fluid src={img_500x500} mx="auto" />
          </Col>
        </Row>
        <hr className="carousel-featurette-divider" />
        <Row>
          <Col col="md-7" order="md-2">
            <h2>Oh yeah, it is that good.  <BSpan text="muted">See for yourself.</BSpan></h2>
            <Lead>
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
            </Lead>
          </Col>
          <Col col="md-5" order="md-1">
            <BImg fluid src={img_500x500} mx="auto" />
          </Col>
        </Row>
        <hr className="carousel-featurette-divider" />
        <Row>
          <Col col="md-7">
            <h2>And lastly, this one. <BSpan text="muted">Checkmate.</BSpan></h2>
            <Lead>
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
            </Lead>
          </Col>
          <Col col="md-5">
            <BImg fluid src={img_500x500} mx="auto" />
          </Col>
        </Row>
        <hr className="carousel-featurette-divider" />
      </div>
    )
  }
}
