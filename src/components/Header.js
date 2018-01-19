import React from "react";

import { Nav, Navbar, NavItem} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar inverse collapseOnSelect className="navi-bar">
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="">
                        <span><img className="logo-img" src="/assets/img/logo-white.png" alt="logo" /></span>
                        <span><b className="logo-text">Sported</b></span>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        About
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;