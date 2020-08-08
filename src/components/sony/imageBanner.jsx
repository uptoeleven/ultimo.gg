import React, { Component } from "react";

import "../../style/sony/imageBanner.scss";

//  Logo
import Logo from "../../assets/sony/ultimo-purple.svg";

class ImageBanner extends Component {
  state = {};
  render() {
    return (
      <div className='image_banner'>
        <div className='background-image'>
          <div className='logo'>
            <img src={Logo} alt='ultimo_warrior'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageBanner;
