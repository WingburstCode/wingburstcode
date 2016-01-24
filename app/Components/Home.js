import React, { Component } from 'react';
import classnames from 'classnames';

import Carousel from './Carousel';
import ValueProposition from './ValueProposition';
import Triptych from './Triptych';
import ActionImage from './ActionImage';

import { className } from './Home.less';

export default class extends Component {
  render() {
    return (
      <div className={classnames(className)}>
        <div className="section">
            <Carousel />
        </div>
        <div className="section">
            <ValueProposition />
        </div>
        <div className="section">
            <Triptych />
        </div>
        <div className="section">
            <ActionImage />
        </div>
        <div className="section">
            <Triptych />
        </div>
      </div>
    );
  }
}
