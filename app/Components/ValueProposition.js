import React, { Component } from 'react';
import classnames from 'classnames';

import { className } from './ValueProposition.less';

export default class extends Component {
  render() {
    return (
        <div className={classnames(className, 'text-center')}>
          <h2>We Are Pencils of Promise</h2>
          <h5>We’re a global community that believes everyone deserves access to quality education. We’re reshaping the landscape of education guided by our</h5>
          <h5><strong>100% PROMISE</strong></h5>
        </div>
    );
  }
}
