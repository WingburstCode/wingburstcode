import React, { Component } from 'react';
import classnames from 'classnames';
import { Col, Image } from 'react-bootstrap';

import { className } from './Team.less';

const erikImagePath = require('../../build/imgs/erik.png');
const patrickImagePath = require('../../build/imgs/patrick.png');

export default class extends Component {
  render() {
    return (
        <div className={classnames(className)}>
          <h2 className="text-center">The Wingburst Team</h2>
          <Col md={6}>
            <Image width="100%" src={erikImagePath} className="bronze" circle />
            <div className="text-center">
              <h3>Erik Ulberg</h3>
              <h4>Development and Design</h4>
              <p>Passionate about art, check out my watercolors! <a href="http://erikulberg.com" target="_blank">erikulberg.com</a></p>
            </div>
          </Col>
          <Col md={6}>
            <Image width="100%" src={patrickImagePath} className="bronze" circle />
            <div className="text-center">
              <h3>Patrick Williams</h3>
              <h4>Development</h4>
              <p>Loves React and other new web technologies. Check out my repos! <a href="https://github.com/pwmckenna" target="_blank">github.com/pwmckenna</a></p>
            </div>
          </Col>
        </div>
    );
  }
}
