import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import WelcomeHeader from "./components/Welcome-header";
import LogoHeader from "./components/Logo-header";
import ReactPlayer from 'react-player'
// import Video from "./components/Video";
// import VideoThumb from "./components/Video-thumb";
import videos from "./videos.json";
import thumbsUp from './images/thumbs_up.svg'
import thumbsDown from './images/thumbs_down.svg'
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
          {/* Video Player and Video Thumbnails */}
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
          {/* Video Statistics */}
          <Row>
            <Col className="stats-row" md={9}>
              {/* Views */}
              <Row >
                <Col>
                  <div id="views">
                    <p className="brandon-medium gray stats">300 views</p>
                  </div>
                </Col>
                {/* Likes and Dislikes */}
                <Col>
                  <div className="float-right flex-row">
                    <div id="like" className="flex-row stats">
                      <img
                        id="thumbs-up"
                        className="thumb"
                        src={thumbsUp}
                        width="23"
                        alt="thumbs up"
                      />
                      <p className="brandon-medium likes-text">35</p>
                    </div>
                    <div id="dislike" className="dislike flex-row stats">
                      <img
                        id="thumbs-down"
                        className="thumb"
                        src={thumbsDown}
                        width="23"
                        alt="thumbs down"
                      />
                      <p className="brandon-medium likes-text">4</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* this column is for spacing purposes */}
            <Col md={3} />
          </Row>
          {/* Footer */}
          <Row>
            <Col>
              <div className="footer brandon-regular gray">
                  <p>powered by <span className="brandon-bold">24G</span> </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;