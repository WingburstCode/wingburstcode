import React, { Component } from 'react';
import classnames from 'classnames';

import ValueProposition from './ValueProposition';
import Triptych from './Triptych';
import Team from './Team';
import Contact from './Contact';

import { className } from './Home.less';

export default class extends Component {
  render() {
    return (
      <div className={classnames(className)}>
        <div className="section" id="about">
            <ValueProposition />
            <Triptych />
        </div>
        <div className="section" id="team">
            <Team />
        </div>
        <div className="section" id="contact">
            <Contact />
        </div>
      </div>
    );
  }
}
