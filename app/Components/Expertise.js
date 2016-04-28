import React, { Component } from 'react';
import classnames from 'classnames';
import { Image } from 'react-bootstrap';

import { className } from './Expertise.less';

const expertImagePath = require('../../build/imgs/expert-logos.png');

export default class extends Component {
  render() {
    return (
        <div className={classnames(className, 'text-center container')}>
          <div className="">
            <h3>We Know:</h3>
            <Image width="90%" src={expertImagePath} />
          </div>
        </div>
    );
  }
}
