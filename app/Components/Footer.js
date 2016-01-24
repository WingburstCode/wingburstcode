import React, { Component } from 'react';
import classnames from 'classnames';

import { className } from './Footer.less';

export default class Footer extends Component {
  render() {
    return (
      <div className={classnames(className, 'text-center')}>
        Hello World Footer
      </div>
    );
  }
}
