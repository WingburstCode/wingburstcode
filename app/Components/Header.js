import React, { Component } from 'react';
import classnames from 'classnames';
import { Nav, NavItem, PageHeader } from 'react-bootstrap';

import { className } from './Header.less';
import Logo from './Logo';

function handleSelect() {
}

export default class Header extends Component {
  render() {
    return (
      <div className={classnames(className)}>
        <PageHeader>
          <div className="container">
            <Logo />
          </div>
        </PageHeader>
        <div className="container text-center">
          <Nav activeKey={1} onSelect={handleSelect}>
            <NavItem eventKey={1} href="/home">Donate</NavItem>
            <NavItem eventKey={2} href="/home">Our Work</NavItem>
            <NavItem eventKey={3} href="/home">Take Action</NavItem>
            <NavItem eventKey={4} href="/home">About Us</NavItem>
            <NavItem eventKey={5} href="/home">Season of Promise</NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}
