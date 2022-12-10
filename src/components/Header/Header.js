import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import ico from '../../img/icon.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const signout = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/' >

                    <img
                        alt=""
                        src={ico}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link active as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link active href="#prd">Hall Services</Nav.Link>
                        <Nav.Link active href="#acd">Hall Accommodation</Nav.Link>
                        <Nav.Link active href="#fac">Hall Facilities</Nav.Link>
                        <Nav.Link active as={Link} to='/user'>Users</Nav.Link>
                        {
                            user && <p className='text-white fw-bold mt-2 me-2'>{user?.displayName}</p>
                        }

                        {
                            user ? <button onClick={signout} className='fw-bold text-white btn border rounded-pill '>Sign Out </button> : <Nav.Link as={Link} className='fw-bold logIn-btn btn rounded-pill' active to="/login">Log In</Nav.Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;