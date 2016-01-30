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
            <Logo />
        </div>
        <div className="text-center links">
          <Nav>
            <NavItem href="#about">About Us</NavItem>
            <NavItem href="#work">Our Work</NavItem>
            <NavItem href="#team">Team</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}
