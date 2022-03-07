import React from 'react'
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import {
    Button,
    // Button,
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from 'reactstrap'

//Image
import Logo from '../Assets/Images/Logo_mockup.jpg';
import { removeUserSession } from '../Utils/Comman';
import { Redirect } from 'react-router-dom';


const Topbar = () => {

    const isAuthenticated = sessionStorage.getItem('isAuthenticated');

    const handleLogout = () => {
        removeUserSession();
        <Redirect to='/login' />

    }

    return (
        <>

            <Navbar
                color="dark"
                expand="md"
                light
            >
                <NavbarBrand >
                    <Link to='/' >
                        <img className='logo' src={Logo} alt='logo' />
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <Link to='/jokes' style={{ textDecoration: "none" }} >
                                <NavLink className='text-white'>
                                    Jokes
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <NavLink className='text-white' href="https://github.com/reactstrap/reactstrap" target='_blank'>
                                GitHub
                            </NavLink>
                        </NavItem>

                    </Nav>
                    {
                        (isAuthenticated)
                            ?
                            <Link onClick={handleLogout} to='/login'  >
                                <Button color='light' > Logout <FeatherIcon icon='log-out' /> </Button>
                            </Link>
                            :
                            null
                    }

                </Collapse>
            </Navbar>

        </>
    )
}

export default Topbar
