import React from 'react'
import { Navbar } from 'react-bootstrap';

function WelcomeHeader() {
  return (
    <Navbar id="welcome-header" className="brandon-light">
      <p>Welcome,<span className="brandon-bold"> Ted</span></p>
    </Navbar>
  )
}

export default WelcomeHeader;