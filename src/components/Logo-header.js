import React from 'react'
import { Navbar } from 'react-bootstrap';
import logo from '../images/24g_logo.svg'

function LogoHeader() {
  return (
    <Navbar id="logo-header" className="brandon-medium full-width-bar">
      <Navbar.Brand>
        <img
          id="logo"
          src={logo}
          width="153"
          height="95"
          alt="24G logo"
        />
      </Navbar.Brand>
      <p id="headline-text">VIDEO PLAYER</p>
    </Navbar>
  )
}

export default LogoHeader;