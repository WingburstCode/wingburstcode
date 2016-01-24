import React, { Component } from 'react';
import Carousel from './Carousel';
import ValueProposition from './ValueProposition';
import Triptych from './Triptych';

export default class extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <ValueProposition />
        <Triptych />
      </div>
    );
  }
}
