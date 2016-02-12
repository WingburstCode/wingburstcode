import React, { Component } from 'react';
import classnames from 'classnames';
import { Image } from 'react-bootstrap';

import { className } from './ValueProposition.less';

const expertImagePath = require('../../build/imgs/expert-logos.png');

export default class extends Component {
  render() {
    return (
        <div className={classnames(className, 'text-center col-md-offset-2 col-md-8')}>
          <h2>We Are Wingburst Code</h2>
          <p>Design and development on web projects, large or small. Experts in Shopify and WordPress setup and customizations. Features from $100 and websites from $1000.</p>
          <Image width="50%" src={expertImagePath} />
        </div>
    );
  }
}
