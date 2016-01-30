import React, { Component } from 'react';
import classnames from 'classnames';

import { className } from './Logo.less';

export default class Logo extends Component {
  static propTypes = {
    light: React.PropTypes.bool
  };
  render() {
    const extraClass = this.props.light ? 'light' : '';
    return (
        <span className={classnames(className, 'logo', extraClass)}></span>
    );
  }
}
