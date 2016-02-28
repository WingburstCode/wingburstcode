import React, { Component } from 'react';
import classnames from 'classnames';
import { Image } from 'react-bootstrap';

import { className } from './ValueProposition.less';

const expertImagePath = require('../../build/imgs/expert-logos.png');

export default class extends Component {
  render() {
    return (
        <div className={classnames(className, 'text-center col-md-offset-2 col-md-8')}>
          <h2>Welcome to Wingburst Code</h2>
          <p>Design and development on web projects, large or small. Experts in Shopify and WordPress setup and customization. Features from $100 and websites from $1000.</p>
          <h3>We Know:</h3>
          <Image width="100%" src={expertImagePath} />
        </div>
    );
  }
}
