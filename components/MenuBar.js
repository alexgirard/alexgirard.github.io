import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

import Clock from './Clock';

const MobileMenu = styled(Row)`
  background-color: #E2717C;
  border-bottom: 3px solid black;
`;

const Cursor = styled.a`
  cursor: ${props => props.href ? "alias" : "pointer"} !important;
`;

const Info = () => (
  <Row className="navbar-extra">
    <span className="pr-3">Alexandra Girard</span>
    <span className="pr-3 navbar-extra-extra">⚡</span>
    <span className="pr-4 mr-1 navbar-extra-extra">
      <Clock />
    </span>
  </Row>
);

const DropdownSection = ({ openTab, section, info, window })=> (
  <div className="dropdown nav-item" id={`${section}-dropdown`}>
    <a className="nav-link dropdown-toggle" role="button" onClick={() => openTab(window ? window.title : section)}>{section}</a>
    <div className="dropdown-menu">
      {_.map(info, ({ title, name, cmd, link }) => {
        if (name == "line") return <NavDropdown.Divider/>;

        const navProps = link ? { href: link, target: "_blank" } : { onClick: () => openTab(title) };
        return(
          <Cursor className="dropdown-item" role="button" {...navProps} key={`dropdown-item-${name}`}>
              <Row className="justify-content-between py-1">
                <div>{name}</div>
                <>{`⌘${cmd}`}</>
              </Row>
          </Cursor>
        );
      })}
    </div>
  </div>
);

const MenuBar = ({ menuDropdowns, openTab }) => (
  <>
    {/* Desktop */}
    <Navbar expand="sm" className="justify-content-between p-0 d-none d-sm-flex">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <>{_.map(menuDropdowns, section => <DropdownSection openTab={openTab} {...section} key={`${section.section}-dropdown`} />)}</>
          <Cursor href="mailto:alexgirard999@gmail.com" className="px-3 nav-link">Email</Cursor>
        </Nav>
      </Navbar.Collapse>
      <Info />
    </Navbar>

    {/* Mobile */}
    <MobileMenu className="m-0 py-1 px-2 d-sm-none d-flex justify-content-between">
      <span><Clock format="h:mm" /></span>
      <span>Alexandra Girard</span>
      <span>⚡</span>
    </MobileMenu>
  </>
);

export default MenuBar;
