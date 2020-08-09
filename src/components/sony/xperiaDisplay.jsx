import React, { Component } from "react";

import "../../style/sony/xperiaDisplay.scss";

import title from "../../assets/sony/logoBlack.png";
import phone from "../../assets/sony/xperiaShad.png";

class XperiaDisplay extends Component {
  state = {};
  render() {
    return (
      <div className='display-container'>
        <div className='wrapper'>
          <div className='title'>
            <img src={title} alt='title'></img>
          </div>
          <div className='phone'>
            <img src={phone} alt='phone'></img>
          </div>
          <div className='sign-up-container'>
            <h3>CLICK HERE TO ENTER NOW</h3>
            <div className='sign-up_button'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default XperiaDisplay;
