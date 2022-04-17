import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
	const navigate = useNavigate();

	const handleLoginBtn = () => {
		navigate('/login');
	}
	return (
		<div>
			<Navbar className='py-2' collapseOnSelect expand="lg" fixed='top' bg="light" variant="light">
				<Container>
				<Navbar.Brand as={Link} to="/home" className='fw-bold'>Learn Programming</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className='ms-auto'>
						<Nav.Link as={Link} to="/home" className='text-center'>Home</Nav.Link>
						<Nav.Link as={Link} to="/blogs" className='text-center'>Blogs</Nav.Link>
						<Nav.Link as={Link} to="/about" className='text-center'>About</Nav.Link>
						<div className='d-flex justify-content-center align-items-center'>
							<button onClick={handleLoginBtn} className='btn btn-warning nav-btn px-3 ms-lg-4 ms-2 w-lg-100 my-lg-0 my-2'>Login</button>
						</div>
					</Nav>
				</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;