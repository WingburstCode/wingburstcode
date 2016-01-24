import React, { Component } from 'react';
import classnames from 'classnames';
import { Image, Button } from 'react-bootstrap';

import { className } from './ActionImage.less';

export default class extends Component {
  render() {
    return (
      <div className={classnames(className)}>
        <Image width="100%" src="https://placem.at/people?h=480&w=1200&_=1" className="bg"/>
        <div className="content-overlay">
          <div className="text-center">
            <h2>250 Million Children Lack Basic Reading, Writing &amp; Math Skills.</h2>
            <h5>Education is the most powerful weapon we can use to change the world.&nbsp;Education reduces poverty, empowers women and helps prevent disease.</h5>
            <div>
              <Button bsStyle="primary">Primary</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
