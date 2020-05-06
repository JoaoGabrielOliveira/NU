import React from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import './index.css';

let actionButton;

const Menu = () => {

    if(useLocation().pathname == '/')
    {
        actionButton = <> <Nav.Link href="/">Pagina Principal</Nav.Link>
                        <Nav.Link href="/">Galeria</Nav.Link>
                        <Nav.Link href="/">Sobre</Nav.Link> </>
    }

    else
    {

    }

    return(            
        <>
        <Navbar id="Menu" expand="lg">
        <Navbar.Brand className='logo'> <label>NU</label></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end'>
            <Nav>
                { actionButton }
            </Nav>
        </Navbar.Collapse>
        </Navbar>

        <Navbar bg='dark' className='justify-content-end'>
            <Nav.Item>
                <Button>LOGAR</Button>
            </Nav.Item>
        </Navbar>
        </>
    )
}

export default Menu;