import React, { Component } from 'react';
import classnames from 'classnames';

import { className } from './Footer.less';

import Logo from './Logo';

export default class Footer extends Component {
  render() {
    return (
      <div className={classnames(className, 'text-center')}>
        <div className="container">
          <div className="col-lg-4">
            <Logo light="true"/>
          </div>
        </div>
      </div>
    );
  }
}
