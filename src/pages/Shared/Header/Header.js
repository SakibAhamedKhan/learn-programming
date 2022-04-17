import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
	return (
		<div>
			<Navbar className='py-2' collapseOnSelect expand="lg" fixed='top' bg="light" variant="light">
				<Container>
				<Navbar.Brand href="#home" className='fw-bold'>Learn Programming</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					{/* <Nav className="me-auto">
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
						<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav> */}
					<Nav className='ms-auto'>
						{/* <Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link> */}
						<Nav.Link as={Link} to="#features" className='text-center'>Home</Nav.Link>
						<Nav.Link as={Link} to="#features" className='text-center'>Blogs</Nav.Link>
						<Nav.Link as={Link} to="#features" className='text-center'>About</Nav.Link>
						<div className='d-flex justify-content-center align-items-center'>
							<button className='btn btn-warning nav-btn px-3 ms-lg-4 ms-2 w-lg-100 my-lg-0 my-2'>Login</button>
						</div>
					</Nav>
				</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;