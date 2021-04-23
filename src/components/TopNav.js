import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const TopNav = ( props ) => {
    return(
        <div id='navbar'>
            <Navbar 
                collapseOnSelect 
                sticky="top" 
                expand="lg" 
                bg="dark" 
                variant="dark"
            >
                <Navbar.Brand 
                eventKey="welcome" 
                onClick={() => props.history.push("/")}
                >
                CodeTrack
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link 
                    eventKey="newcar" 
                    onClick={() => props.history.push("/newcar")}
                    >
                        New Car
                    </Nav.Link>
                    <Nav.Link 
                    eventKey="mycars" 
                    onClick={() => props.history.push("/mycars")}
                    >
                        My Cars
                    </Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link 
                    eventKey="login" 
                    onClick={() => props.history.push("/login")}
                    >
                        Login
                    </Nav.Link>
                    <Nav.Link 
                    eventKey="signup" 
                    onClick={() => props.history.push("/signup")}
                    >
                        Signup
                    </Nav.Link>
            
                    <NavDropdown title="Account" id="collasible-nav-dropdown">
                        <NavDropdown.Item 
                        eventKey="profile" 
                        onClick={() => props.history.push("/profile")}
                        >
                            My Profile
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item 
                        eventKey='logout' 
                        onClick={() => props.history.push("/")}
                        >
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                    
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default TopNav; 
