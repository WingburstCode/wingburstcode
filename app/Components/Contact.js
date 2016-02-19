import React, { Component } from 'react';
import classnames from 'classnames';

import { className } from './Contact.less';

export default class extends Component {
  render() {
    return (
        <div className={classnames(className, 'text-center')}>
          <h2>Contact Us</h2>
          <p>We are located in Seattle, WA, USA.</p>
          <p>email: <a href="mailto:contact@wingburstcode.com">contact@wingburstcode.com</a></p>
          <p>phone: (206) 948-3348</p>
        </div>
    );
  }
}
