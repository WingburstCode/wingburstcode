import React, { Component } from 'react';
import classnames from 'classnames';

import Carousel from './Carousel';
import ValueProposition from './ValueProposition';
import Triptych from './Triptych';

import { className } from './Home.less';

export default class extends Component {
  render() {
    return (
      <div className={classnames(className)}>
        <div className="section" id="about">
            <ValueProposition />
            <Triptych />
        </div>
        <div className="section" id="work">
            <Carousel />
        </div>
        <div className="section" id="team">
            <Triptych />
        </div>
        <div className="section" id="contact">
            <ValueProposition />
        </div>
      </div>
    );
  }
}
