import React, { Component } from "react";

// Css
import "../../style/homePage/imageBanner.scss";

// images
import imageOne from "../../assets/homePage/imageLeft.png";
import imageTwo from "../../assets/homePage/imageArena.png";

class ImagerBanner extends Component {
  render() {
    return (
      <div className='imageBanner'>
        <div
          className='imageBanner_image'
          style={{ backgroundImage: `url(${imageOne})` }}></div>
        <div
          className='imageBanner_image'
          style={{ backgroundImage: `url(${imageTwo})` }}></div>
      </div>
    );
  }
}

export default ImagerBanner;
