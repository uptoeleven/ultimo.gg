import React, { Component } from "react";

// css
import "../../style/videoLibary/videoFeature.scss";

class VideoFeature extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className='video-feature'>
        <div className='wrapper'>
          <div
            className='video-feature-video'
            style={{ backgroundImage: `url(${this.props.thumbnail})` }}>
            <div className='button'>
              <span className='play'></span>
            </div>
          </div>
          <div className='video-content'>
            <h2 className='heading'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </h2>
            <p className='text-block'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <span className='date'>22 August 2020</span>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoFeature;
