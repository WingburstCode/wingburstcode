import React, { Component } from 'react';
import classnames from 'classnames';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import { className } from './Triptych.less';

export default class extends Component {
  render() {
    return (
        <div className={classnames(className)}>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Image width="100%" src="https://placem.at/places?h=600&w=600&_=0" circle />
                <div className="text-center">
                  <h3>One-stop Shop</h3>
                  <p>Doing everything yourself is a pain. We know development and we know excellent people who do everything else.  We can coordinate as much or as little as you want to make your web presence a breeze.</p>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <Image width="100%" src="https://placem.at/people?h=600&w=600&_=1" circle />
                <div className="text-center">
                  <h3>Evolve with you</h3>
                  <p>Excellent communication allows us to iterate efficiently with you as your ideas and business take shape.  You don''t need a perfect plan from the start.  We build flexibility into the product and scale as you grow.</p>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <Image width="100%" src="https://placem.at/thing?h=600&w=600&_=2" circle />
                <div className="text-center">
                  <h3>Sturdy Engineering</h3>
                  <p>We deliver modern, mobile-friendly websites with secure data protection. You can expect the same quality from us that your customers expect from you.</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}
