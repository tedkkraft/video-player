import React from 'react'
import { Container, Col, Row, } from 'react-bootstrap';
import WelcomeHeader from "./components/Welcome-header";
import LogoHeader from "./components/Logo-header";
import ReactPlayer from 'react-player'
import videos from "./videos.json";
import thumbsUp from './images/thumbs_up.svg'
import thumbsDown from './images/thumbs_down.svg'
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    // Setting state to the first video in the array
    this.state = {
      id: 0,
      title: "Who is 24G?",
      video: "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.mp4",
      thumb: "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.jpg",
    };
    this.swapVideo = this.swapVideo.bind(this);
  };

  swapVideo(event) {
    this.setState({
      id: event.target.id,
      title: event.target.title,
      // longDesc is not what I'd prefer here, it's acting as a stopgap to move the video data
      video: event.target.longDesc,
      thumb: event.target.src,
    });
    console.log(this.state);

  };

  likesCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.likesCount) {
        localStorage.likesCount = Number(localStorage.likesCount)+1;
      } else {
        localStorage.likesCount = 35;
      }
      document.getElementById("likesDisplay").innerHTML = localStorage.likesCount;
    }
  };

  likesDisplay() {
    document.getElementById("likesDisplay").innerHTML = localStorage.likesCount;
  };

  dislikesCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.dislikesCount) {
        localStorage.dislikesCount = Number(localStorage.dislikesCount)+1;
      } else {
        localStorage.dislikesCount = 4;
      }
      document.getElementById("dislikesDisplay").innerHTML = localStorage.dislikesCount;
    }
  };

  dislikesDisplay() {
    document.getElementById("dislikesDisplay").innerHTML = localStorage.dislikesCount;
  };

  viewsCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.viewsCount) {
        localStorage.viewsCount = Number(localStorage.viewsCount)+1;
      } else {
        localStorage.viewsCount = 300;
      }
      document.getElementById("viewsDisplay").innerHTML = localStorage.viewsCount + " views";
    }
  };

  viewsDisplay() {
      document.getElementById("viewsDisplay").innerHTML = localStorage.viewsCount + " views";
    };

// Load the data from local storage to the page
  componentDidMount() {
    this.likesDisplay();
    this.dislikesDisplay();
    this.viewsDisplay();
  };

  // This is latest of my attempts to fix the subheader from breaking after the first state change. Saving this chunk to discuss with another engineer */
  // componentDidMount() {
  //   document.querySelector("#subheader").textContent = this.state.title;
  // };

  render() {
    return (
      <div className="App mx-auto">
      <Container fluid className="Page-body">
        <WelcomeHeader />
        <LogoHeader />
          <Row>
            <Col>
            {/* This subheader relies on state for information and is breaking after the first state change */}
              <p id="subheader" className="brandon-medium">{this.state.title}</p>
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
                onEnded={this.viewsCounter}
                controls
                />
              </div>
            </Col>
            <Col md={3}>
              {videos.map(videos => (
                <button className="thumbnail" onClick={this.swapVideo}>
                  <img
                    key={videos.id}
                    id={videos.id}
                    alt={videos.title}
                    src={videos.thumb}
                    // As mentioned above (line 30), I'm using longDesc as a stopgap to move the video data
                    longDesc={videos.video}
                  />
                </button>
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
                    <p id="viewsDisplay" className="brandon-medium gray stats"></p>
                  </div>
                </Col>
                {/* Likes and Dislikes */}
                <Col>
                {/* Likes */}
                  <div className="float-right flex-row">
                    <button onClick={this.likesCounter} id="like" className="flex-row stats">
                      <img
                        id="thumbs-up"
                        className="thumb"
                        src={thumbsUp}
                        width="23"
                        alt="thumbs up"
                      />
                      <p id="likesDisplay" className="brandon-medium likes-text"></p>
                    </button>
                    {/* Dislikes */}
                    <button onClick={this.dislikesCounter} id="dislike" className="dislike flex-row stats">
                      <img
                        id="thumbs-down"
                        className="thumb"
                        src={thumbsDown}
                        width="23"
                        alt="thumbs down"
                      />
                      <p id="dislikesDisplay" className="brandon-medium likes-text"></p>
                    </button>
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