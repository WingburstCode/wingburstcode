import React, { Component } from 'react';
import classnames from 'classnames';

import { className } from './ValueProposition.less';

export default class extends Component {
  render() {
    return (
        <div className={classnames(className, '')}>
          <div className="primary">
            <div className="container text-center">
                <h2>Development and design on web projects.</h2>
                <div className="col-md-offset-2 col-md-8">
                  <h4 className="">Experts in Shopify and WordPress setup and customization.</h4>
                  <h4>Small features to large websites.</h4>
                </div>
            </div>
          </div>
        </div>
    );
  }
}
