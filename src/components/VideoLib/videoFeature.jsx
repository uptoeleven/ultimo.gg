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
            style={{ backgroundImage: `url(${this.props.thumbnail})` }}
            onClick={() => this.props.showLight(this.props.url)}>
            <div className='button'>
              <span className='play'></span>
            </div>
          </div>
          <div className='video-content'>
            <h2 className='heading'>{this.props.heading}</h2>
            <p className='text-block'>{this.props.subHeading}</p>
            <span className='date'>{this.props.date}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoFeature;
