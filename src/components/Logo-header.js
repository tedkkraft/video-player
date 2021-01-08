import React from 'react'
import { Navbar } from 'react-bootstrap';
import logo from '../images/24g_logo.svg'

function LogoHeader() {
  return (
    <Navbar>
      <Navbar.Brand>
        <img
          src={logo}
          width="325"
          height="100"
          alt="24G logo"
        />
      </Navbar.Brand>
      <h1>VIDEO PLAYER</h1>
    </Navbar>
  )
}

export default LogoHeader;