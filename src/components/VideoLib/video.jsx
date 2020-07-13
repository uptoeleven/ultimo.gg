import React, { Component } from "react";

import "../../style/videoLibary/video.scss";

class Video extends Component {
  state = {};
  render() {
    return (
      <div className='video'>
        <div
          className='video_container'
          style={{ backgroundImage: `url(${this.props.thumbnail})` }}
          onClick={() => this.props.showLight(this.props.url)}>
          <div className='button'>
            <span className='play'></span>
          </div>
        </div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Video;
