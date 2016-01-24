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
        <Carousel />
        <ValueProposition />
        <Triptych />
        <ActionImage />
        <Triptych />
      </div>
    );
  }
}
