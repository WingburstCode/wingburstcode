import React, { Component } from 'react';
import classnames from 'classnames';
import { Col, Image } from 'react-bootstrap';

import { className } from './Team.less';

const erikImagePath = require('../../build/imgs/erik.png');
const patrickImagePath = require('../../build/imgs/patrick.png');

export default class extends Component {
  render() {
    return (
        <div className={classnames(className, 'text-center container')}>
          <h3><span>The Wingburst Team</span></h3>
          <div className="team">
            <Col md={6}>
              <Image width="70%" src={erikImagePath} className="bronze" circle />
              <div>
                <h4>Erik Ulberg</h4>
                <p>Development and Design</p>
                <p><i>Passionate about art, check out my watercolors!</i> <a href="http://erikulberg.com" target="_blank">erikulberg.com</a></p>
              </div>
            </Col>
            <Col md={6}>
              <Image width="70%" src={patrickImagePath} className="bronze" circle />
              <div>
                <h4>Patrick Williams</h4>
                <p>Development</p>
                <p><i>Loves React and other new web technologies. Check out my repos!</i> <a href="https://github.com/pwmckenna" target="_blank">github.com/pwmckenna</a></p>
              </div>
            </Col>
          </div>
        </div>
    );
  }
}
