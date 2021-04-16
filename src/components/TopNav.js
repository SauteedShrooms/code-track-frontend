import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const TopNav = ({ view }) => {
    return(
        <div id='navbar'>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Ven-U</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/events">Events</Nav.Link>
                    <Nav.Link href="/hostevent">Host Event</Nav.Link>
                    {/* <Nav.Link href="/profiles">Profiles</Nav.Link> */}
                    {/* <Nav.Link href="/tickets">Tickets</Nav.Link> */}
                    <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default TopNav; 