import React, { Component } from 'react';
import { Carousel, Container, Button } from 'bootstrap-4-react';

import { img_1x1 } from './images';

export default class MyCarousel extends Component {
  render() {
    return (
      <Carousel id="myCarousel" className="carousel-carousel">
        <Carousel.Indicators>
          <Carousel.Indicator target="#myCarousel" to="0" active />
          <Carousel.Indicator target="#myCarousel" to="1" />
          <Carousel.Indicator target="#myCarousel" to="2" />
        </Carousel.Indicators>
        <Carousel.Inner>
          <Carousel.Item className="carousel-slide" active>
            <img src={img_1x1} />
            <Container>
              <Carousel.Caption text="left" className="carousel-slide-caption">
                <h1>Example headline.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
                <Button primary lg>Learn more</Button>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>
          <Carousel.Item className="carousel-slide">
            <img src={img_1x1} />
            <Container>
              <Carousel.Caption className="carousel-slide-caption">
                <h1>Another example headline.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
                <Button primary lg>Learn more</Button>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>
          <Carousel.Item className="carousel-slide">
            <img src={img_1x1} />
            <Container>
              <Carousel.Caption text="right" className="carousel-slide-caption">
                <h1>One more for good measure.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
                <Button primary lg>Learn more</Button>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>
        </Carousel.Inner>
        <Carousel.Prev href="#myCarousel">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next href="#myCarousel">
          <Carousel.Next.Icon />
        </Carousel.Next>
      </Carousel>
    )
  }
}
