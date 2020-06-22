import React, { Component } from "react";

// css
import "../../style/videoLibary/videoBanner.scss";

class VideoBanner extends Component {
  state = {};
  render() {
    return (
      <div className='Video-Banner'>
        <h1 className='Video-Banner_title'>Video Libary</h1>
      </div>
    );
  }
}

export default VideoBanner;
