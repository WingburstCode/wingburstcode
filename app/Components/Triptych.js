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
                  <h4>100% Direct Giving</h4>
                  <p>Every dollar donated online goes directly to our programs to educate more children.</p>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <Image width="100%" src="https://placem.at/people?h=600&w=600&_=1" circle />
                <div className="text-center">
                  <h4>100% Local Leadership</h4>
                  <p>All of our Country Directors are from the country they lead.</p>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <Image width="100%" src="https://placem.at/thing?h=600&w=600&_=2" circle />
                <div className="text-center">
                  <h4>100% Success Rate</h4>
                  <p>Every school we’ve opened to date is fully operational and educating students daily.</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}
