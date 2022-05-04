import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <Navbar className='navbar-style' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className='title-logo fs-5 fw-bold' as={Link} to="/">Fresh Fruits Warehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header className='p-2 px-3 mb-3 border-bottom' closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                Fruits Warehouse
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='p-0 ps-2'>
                            <Nav className="justify-content-end flex-grow-1">

                                <Nav.Link className='p-0 text-center'>
                                    <CustomLink to={'/home'}>Home</CustomLink>
                                </Nav.Link >

                                <Nav.Link className='p-0 text-center'>
                                    <CustomLink to={'/login'}>Login</CustomLink>
                                </Nav.Link>
                                <Nav.Link className='p-0 text-center'>
                                    <CustomLink to={'/logout'}>Log out</CustomLink>
                                </Nav.Link>

                                <Nav.Link className='p-0 text-center'>
                                    <CustomLink to={'/register'}>Register</CustomLink>
                                </Nav.Link>

                                <Nav.Link className='p-0 text-center'>
                                    <CustomLink to={'/about'}>About</CustomLink>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;