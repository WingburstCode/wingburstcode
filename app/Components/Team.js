import React, { Component } from 'react';
import classnames from 'classnames';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import { className } from './Team.less';

const erikImagePath = require('../../build/imgs/erik.png');
const patrickImagePath = require('../../build/imgs/patrick.png');

export default class extends Component {
  render() {
    return (
        <div className={classnames(className)}>
          <h3 className="text-center">The Wingburst Team</h3>
          <Grid>
            <Row>
              <Col md={6}>
                <Image width="100%" src={erikImagePath} circle />
                <div className="text-center">
                  <h3>Erik Ulberg</h3>
                  <p>Doing everything yourself is a pain. We know development and we know excellent people who do everything else.  We can coordinate as much or as little as you want to make your web presence a breeze.</p>
                </div>
              </Col>
              <Col md={6}>
                <Image width="100%" src={patrickImagePath} circle />
                <div className="text-center">
                  <h3>Patrick Williams</h3>
                  <p>Excellent communication allows us to iterate efficiently with you as your ideas and business take shape.  You don''t need a perfect plan from the start.  We build flexibility into the product and scale as you grow.</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}
