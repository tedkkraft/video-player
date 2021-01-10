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
      <div className="App">
        <WelcomeHeader />
        <LogoHeader />
        <Container className="Page-body">
          <Row>
            <Col>
              <div className="video-wrapper">
                <ReactPlayer
                id={this.state.id}
                title={this.state.title}
                url={this.state.video}
                light={this.state.thumb}
                controls
                />
              </div>
            </Col>
            <Col>
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
        </Container>
      </div>
    );
  }
}

export default App;
