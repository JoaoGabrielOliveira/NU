import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './index.css';

const Menu = () => {
    return(            
        <Navbar expand="lg">
        <Navbar.Brand className='logo'> <label>NU</label></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end'>
            <Nav className="">
                <Nav.Link href="/home">Pagina Principal</Nav.Link>
                <Nav.Link eventKey="link-1">Galeria</Nav.Link>
                <Nav.Link eventKey="link-2">Sobre</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;