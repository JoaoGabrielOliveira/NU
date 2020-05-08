import React from 'react'
import { Navbar, Nav, Button, Dropdown, ButtonGroup } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import { useLocation } from 'react-router-dom';
import './index.css';

let actionButton;

const Menu = () => {

    if(useLocation().pathname == '/')
    {
        actionButton = <> <Nav.Link href="/">Pagina Principal</Nav.Link>
                        <Nav.Link href="/gallery">Galeria</Nav.Link>
                        <Nav.Link href="/">Sobre</Nav.Link> </>
    }

    else
    {
        actionButton = <>
        <Nav.Link href="/">Pagina Principal</Nav.Link>
        <Nav.Link href="/">Galeria</Nav.Link>
        <Nav.Link href="/">Sobre</Nav.Link>

        <Dropdown as={ButtonGroup}>
        <Button className='btn-user' variant="outline-dark">Usuario</Button>

        <Dropdown.Toggle split variant="outline-dark" id="dropdown-split-basic" />

        <Dropdown.Menu>
            <Dropdown.Item href="/users/sign_out">Logoff</Dropdown.Item>
            <Dropdown.Item href="/users/edit">Editar Perfil</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </>
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
        </>
    )
}

export default Menu;