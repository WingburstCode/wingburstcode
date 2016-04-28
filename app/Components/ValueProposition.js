import React, { Component } from 'react';
import classnames from 'classnames';

import { className } from './ValueProposition.less';

export default class extends Component {
  render() {
    return (
        <div className={classnames(className, '')}>
          <div className="primary">
            <div className="container text-center">
                <h2>Design and development on web projects.</h2>
                <div className="">
                  <h4 className="col-md-offset-2 col-md-8">Experts in Shopify and WordPress setup and customization.  Features from $100 and websites from $1000.</h4>
                </div>
            </div>
          </div>
        </div>
    );
  }
}
