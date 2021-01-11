import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import WelcomeHeader from "./components/Welcome-header";
import LogoHeader from "./components/Logo-header";
import ReactPlayer from 'react-player'
// import Video from "./components/Video";
import videos from "./videos.json";
// import VideoThumb from "./components/Video-thumb";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    // Setting state to the first video in the array
    this.state = videos[0];
    //console.log(this.state);
  }

  // swapVideo = () => {
  //   this.setState({ liveVideo: })
  // };

  render() {
    return (
      <div className="App mx-auto">
      <Container fluid className="Page-body">
        <WelcomeHeader />
        <LogoHeader />
          <Row>
            <Col>
              <p id="subheader" className="brandon-medium">24G Super Awesome Video</p>
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <div className="video-wrapper">
                <ReactPlayer
                id={this.state.id}
                title={this.state.title}
                url={this.state.video}
                light={this.state.thumb}
                className="video-active"
                controls
                />
              </div>
            </Col>
            <Col md={3}>
              {videos.map(videos => (
                <div className="thumbnail">
                  <img
                    key={videos.id}
                    id={videos.id}
                    alt={videos.title}
                    src={videos.thumb}
                  />
                </div>
              ))}
            </Col>
          </Row>
          <Row>
            <Col md={9}>
                <div className="video-stats">
                  <p id="views-text"className="brandon-medium">300 views</p>
                </div>
                <div className="this-is-a-line-break">
                </div>
            </Col>
            <Col md={3}>
                <div className="spacing-column">
                  <p>spacer col</p>
                </div>
            </Col>
          </Row>
          <Row>
            <div className="text-center">
                <p>powered by 24G</p>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
