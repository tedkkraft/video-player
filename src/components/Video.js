import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
  return (
    <div className='video-wrapper'>
      <ReactPlayer
        url='https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.mp4'
        light="https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.jpg"
        controls
      />
    </div>
  )
}

export default Video;