import React, { Component } from "react";
import ReactPlayer from "react-player";

// css
import "../../style/homePage/videoComponent.scss";
class VideoComponent extends Component {
  state = {};
  render() {
    return (
      <ReactPlayer
        className='react-player'
        controls={false}
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        width='100%'
      />
    );
  }
}

export default VideoComponent;
