import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Cart } from '../lcons/Cart';
import { Profile } from '../lcons/Profile';
import { SearchI } from '../lcons/SearchI';

const TopNav = () => {
    return (
        <div id='navbar-main'>
            <Navbar bg="" expand="lg" id='navbarr'>
                <>
                    <Navbar.Brand href="">MYCOMPANY.COM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Link href="">EDIT</Nav.Link>
                            <Nav.Link href="">ARRIVALS</Nav.Link>
                            <Nav.Link href="">DESIGNERS</Nav.Link>
                            <Nav.Link href="">CLOTHING</Nav.Link>
                            <Nav.Link href="">SHOES</Nav.Link>
                            <Nav.Link href="">BAGS</Nav.Link>
                            <Nav.Link href="">ACCESSORIES</Nav.Link>
                            <Nav.Link href="">JEWELRY</Nav.Link>
                            <Nav.Link href="">BEAUTY</Nav.Link>
                            <Nav.Link href="">HOME</Nav.Link>
                            {/* <div className='icons'>
                            <Nav.Link><SearchI/></Nav.Link>
                            <Nav.Link><Cart/></Nav.Link>
                            <Nav.Link><Profile/></Nav.Link>
                            </div> */}
                        </Nav>
                        <div className='icons'>
                            <Nav.Link><SearchI /></Nav.Link>
                            <Nav.Link><Cart /></Nav.Link>
                            <Nav.Link><Profile /></Nav.Link>
                        </div>
                    </Navbar.Collapse>
                </>
            </Navbar>
        </div>
    )
}

export default TopNav