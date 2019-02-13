import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../../../assets/img/keep-me-logo-coral.svg';
import './Header.scss'

const Header = () => (   
    <Navbar id="nav" collapseOnSelect expand="lg" fixed="top" bg="white">
        <Navbar.Brand href="/">
            <img
                id="logo-nav"
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="Keep Me logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
                <Nav.Link className="head-nav-link" href="/contact">Contact</Nav.Link>
                <Nav.Link className="head-nav-link" href="/login">Se connecter</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header;