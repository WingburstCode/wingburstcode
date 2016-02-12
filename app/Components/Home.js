import React, { Component } from 'react';
import classnames from 'classnames';

import ValueProposition from './ValueProposition';
import Team from './Team';
import Contact from './Contact';

import { className } from './Home.less';

export default class extends Component {
  render() {
    return (
      <div className={classnames(className, 'container')}>
        <div className="row" id="about">
            <ValueProposition />
        </div>
        <div className="row" id="team">
            <Team />
        </div>
        <div className="row" id="contact">
            <Contact />
        </div>
      </div>
    );
  }
}
