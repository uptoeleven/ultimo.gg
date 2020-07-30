import React, { Component } from "react";

// css
import "../../style/videoLibary/videoBanner.scss";

class VideoBanner extends Component {
  state = {};
  render() {
    return (
      <div className='Video-Banner'>
        <div className='background-one'></div>
        <div className='background-two'></div>
        <h1 className='Video-Banner_title'>Video Library</h1>
      </div>
    );
  }
}

export default VideoBanner;
