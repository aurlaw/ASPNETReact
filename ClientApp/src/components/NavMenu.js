import React from 'react';
import Link from 'react-router-dom/Link';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import './NavMenu.css';

export default props => (
  <aside>
    <Navbar inverse fixedTop fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={'/'}>ASPNET React Demos</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to={'/'} exact>
            <NavItem>
              <Glyphicon glyph='home' /> Home
            </NavItem>
          </LinkContainer>
          <LinkContainer to={'/counter'}>
            <NavItem>
              <Glyphicon glyph='education' /> Counter
            </NavItem>
          </LinkContainer>
          <LinkContainer to={'/fetchdata'}>
            <NavItem>
              <Glyphicon glyph='cd' /> Fetch data
            </NavItem>
          </LinkContainer>
          <LinkContainer to={'/calculator'}>
            <NavItem>
              <Glyphicon glyph='piggy-bank' /> TEY Calculator
            </NavItem>
          </LinkContainer>
          <LinkContainer to={'/quiz'}>
            <NavItem>
              <Glyphicon glyph='blackboard' /> Quiz
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </aside>
);
