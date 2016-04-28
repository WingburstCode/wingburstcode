import React, { Component } from 'react';
import classnames from 'classnames';
import { Nav, NavItem } from 'react-bootstrap';
import jQuery from 'jquery';

import { className } from './Header.less';
import Logo from './Logo';

jQuery(window).on('scroll touchmove', function toggleTiny() {
  jQuery('.' + className).toggleClass('tiny', jQuery(document).scrollTop() > 0);
});

export default class Header extends Component {
  render() {
    return (
      <div className={classnames(className)}>
        <div className="pageHeader text-center">
            <Logo/>
        </div>
        <div className="text-center links">
          <Logo className="hidden-xs"/>
          <Nav className="container">
            <NavItem href="#about" className="col-xs-4"><span>About</span></NavItem>
            <NavItem href="#team" className="col-xs-4"><span>Team</span></NavItem>
            <NavItem href="#contact" className="col-xs-4 contact"><span>Contact</span></NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}
