import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import LogoHeader from "./components/Logo-header";
import WelcomeHeader from "./components/Welcome-header";
import videoes from "./videos.json";
import './App.css';

class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    videos = []
  };

  // !!! Need to complete this setState !!!
  // swapVideo = () => {
  //   this.setState({ liveVideo: })
  // };

  render() {
    return (
      <div className="App">
        <WelcomeHeader />
        <LogoHeader />
        <Container className="Page-body">

        </Container>
      </div>
    );
  }
}

export default App;
