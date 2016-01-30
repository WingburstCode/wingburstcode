import React, { Component } from 'react';
import classnames from 'classnames';

import { className } from './Logo.less';

export default class Logo extends Component {
  render() {
    var extraClass = this.props.light ? 'light' : '';
    return (
        <span className={classnames(className, 'logo', extraClass)}></span>
    );
  }
}
