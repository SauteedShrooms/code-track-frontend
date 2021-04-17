import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const TopNav = ({ view }) => {
    return(
        <div id='navbar'>
            <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#welcome">
                CodeTrack
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#newcar">New Car</Nav.Link>
                    <Nav.Link href="#race">Race</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link eventKey={2} href="#login">
                        Login
                    </Nav.Link>
                    <NavDropdown title="Account" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">My Cars</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default TopNav; 
