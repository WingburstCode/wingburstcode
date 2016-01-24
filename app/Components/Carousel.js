import React, { Component } from 'react';
import classnames from 'classnames';
import { Carousel, CarouselItem } from 'react-bootstrap';

import { className } from './Carousel.less';

export default class extends Component {
  render() {
    return (
        <div className={classnames(className)}>
          <Carousel>
            <CarouselItem>
              <img width="100%" src="https://placem.at/places?h=400&w=800&_=0"/>
              <div className="carousel-caption">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <img width="100%" src="https://placem.at/places?h=400&w=800&_=1"/>
              <div className="carousel-caption">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <img width="100%" src="https://placem.at/places?h=400&w=800&_=2"/>
              <div className="carousel-caption">
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
    );
  }
}
