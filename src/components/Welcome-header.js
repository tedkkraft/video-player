import React from 'react'
import { Navbar } from 'react-bootstrap';

function WelcomeHeader() {
  return (
    <Navbar id="welcome-header">
      <p>Welcome,<span id="welcome-name"> Ted</span></p>
    </Navbar>
  )
}

export default WelcomeHeader;