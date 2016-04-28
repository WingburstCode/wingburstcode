import React, { Component } from 'react';
import classnames from 'classnames';

import ValueProposition from './ValueProposition';
import Expertise from './Expertise';
import Team from './Team';
import Contact from './Contact';

import { className } from './Home.less';

export default class extends Component {
  render() {
    return (
      <div className={classnames(className, '')}>
        <div className="homeSection" id="about">
            <ValueProposition />
        </div>
        <div className="homeSection" id="expertise">
            <Expertise />
        </div>
        <div className="homeSection" id="team">
            <Team />
        </div>
        <div className="homeSection" id="contact">
            <Contact />
        </div>
      </div>
    );
  }
}
