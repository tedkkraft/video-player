import React from "react";
import ReactPlayer from 'react-player'
import { Container, Row, Col } from 'react-bootstrap';
import LogoHeader from "./components/Logo-header";
import WelcomeHeader from "./components/Welcome-header";
import './App.css';

function App() {
  return (
    <div className="App">
      <WelcomeHeader />
      <LogoHeader />
      <Container className="Page-body">
        <p>Test</p>
        <ReactPlayer
          url='https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.mp4'
          light="https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.jpg"
          playing
          controls
          />
      </Container>
    </div>
  );
}

export default App;
