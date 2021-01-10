import React from 'react'
import { Navbar } from 'react-bootstrap';
import logo from '../images/24g_logo.svg'

function LogoHeader() {
  return (
    <Navbar id="logo-header" className="brandon-medium">
      <Navbar.Brand>
        <img
          src={logo}
          width="325"
          height="100"
          alt="24G logo"
        />
      </Navbar.Brand>
      <p>VIDEO PLAYER</p>
    </Navbar>
  )
}

export default LogoHeader;