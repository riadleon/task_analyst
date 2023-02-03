import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../assests/image/Leadzen.png'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='shadow-sm mb-3'>
            <Container>
                <Link className='navbar-brand fs-3 fw-bold' to="/"><img src={logo} alt='LOGO'/></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="w-100 justify-content-end">
                        <NavLink className='nav-link text-dark font' to="/">Home</NavLink>
                        <NavLink className='nav-link text-dark font' to="/users">Users</NavLink>
                        <NavLink className='nav-link text-dark font' to="/about">About</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
};

export default Header;