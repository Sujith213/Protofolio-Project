import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 
import logo from './plus.png';

const NavigationBar = () => {


  const handleLogout = () => {
    window.location.href = 'http://192.168.56.1:3000';
  };

  const navbarStyle = {
    height: '57px',
    backgroundColor: '#f0f0f0', 
    borderRadius: '5px', 
    padding: '10px', 
  };

  const brandStyle = {
    fontSize: '30px',
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
  };

  const buttonStyle = {
    borderRadius: '5px',
    padding: '5px 10px',
    marginLeft: '440px',
  };

  const buttonStyle2 = {
    borderRadius: '5px',
    padding: '5px 10px',
    marginLeft: '10px',
  };

  const buttonStyle3 = {
    borderRadius: '5px',
    padding: '5px 10px',
    marginLeft: '10px',
  };

  return (
    <Navbar style={navbarStyle} expand="lg">
      <Navbar.Brand style={brandStyle}>
        <img
          src={logo}
          alt="Logo"
          height="45"
          className="d-inline-block align-top"
        />
        {' Addition of Two numbers'}
      </Navbar.Brand>

      <Nav.Link onClick={handleLogout} style={{ ...buttonStyle3, backgroundColor: 'red', color: 'white' }}>Logout</Nav.Link>
    </Navbar>
  );
};

export default NavigationBar;
