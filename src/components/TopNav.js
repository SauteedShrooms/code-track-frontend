import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const TopNav = ({ view, isLoggedIn }, props ) => {
    return(
        <div id='navbar'>
            <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
                <Navbar.Brand eventKey="welcome" href="/welcome">
                CodeTrack
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link eventKey="newcar" href="/newcar">New Car</Nav.Link>
                    <Nav.Link eventKey="race" href="/race">Race</Nav.Link>
                    </Nav>
                    <Nav>
                    {
                        props.isLoggedIn ? 
                        null
                        :
                        <>
                        <Nav.Link eventKey="login" href="/login">Login</Nav.Link>
                        <Nav.Link eventKey="signup" href="/signup">Signup</Nav.Link>
                        </>
                    }

                    <NavDropdown title="Account" id="collasible-nav-dropdown">
                        <NavDropdown.Item eventKey="profile" href="/profile">My Profile</NavDropdown.Item>
                        {/* <NavDropdown.Item href="/mycars">My Cars</NavDropdown.Item> */}
                        <NavDropdown.Divider />
                        <NavDropdown.Item isLoggedIn={props.isLoggedIn} eventKey='logout' href="/logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default TopNav; 
