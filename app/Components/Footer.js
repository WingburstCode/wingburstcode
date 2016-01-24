import React, { Component } from 'react';
import classnames from 'classnames';
import { Button } from 'react-bootstrap';

import { className } from './Footer.less';

import Logo from './Logo';

export default class Footer extends Component {
  render() {
    return (
      <div className={classnames(className, 'text-center')}>
        <div className="container">
            <Logo />
            <Button bsStyle="link">Link</Button><Button bsStyle="link">Link</Button><Button bsStyle="link">Link</Button>
        </div>
      </div>
    );
  }
}
