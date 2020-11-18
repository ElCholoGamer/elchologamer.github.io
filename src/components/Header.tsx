import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

const Header: React.FC = () => (
	<Navbar variant="dark" bg="dark">
		<Navbar.Brand>
			<img
				className="rounded-circle bg-secondary mr-3"
				src="/favicon.ico"
				alt="favicon"
			/>
			My Page
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<NavItem>
					<NavLink href="/#/">Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/#/meme-generator">Meme Generator</NavLink>
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Header;