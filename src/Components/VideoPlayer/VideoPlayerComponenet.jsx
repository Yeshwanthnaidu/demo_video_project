import React from "react";
import ReactPlayer from 'react-player'

// Render a YouTube video player

const VideoPlayerComponent = (props) => {
  const { videoSource } = props;
  if (!videoSource) {
    return <div className="d-flex justify-content-center align-items-center" style={{ width: 1000, height: 560, border: '1px solid black' }}>Please Select a Video</div>
  }
  return <ReactPlayer url={videoSource} controls={true} width={1000} height={560} />
};

export default VideoPlayerComponent;