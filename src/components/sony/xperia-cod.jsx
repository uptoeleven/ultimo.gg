import React, { Component } from "react";

import "../../style/sony/xperiaCOD.scss";

import xperiaLogo from "../../assets/sony/xperia-logo.png";
import controllerPhone from "../../assets/sony/Controller_Phone.svg";
class XperiaCOD extends Component {
  state = {};
  render() {
    return (
      <div className='xperia-cod-container'>
        <div className='xperia-title'>
          <img src={xperiaLogo} alt='xperia logo'></img>
        </div>
        <p className='text-block'>
          Sony’s latest flagship device, Xperia 1 II, is the perfect device for
          mobile gaming.
        </p>
        <div className='sign-up-container'>
          <p className='text-block'>CLICK HERE TO ENTER NOW</p>
          <div className='sign-up_button'></div>
        </div>
        <img className='phone' src={controllerPhone} alt='controller'></img>
        <div className='disclamer'>
          <span>
            *Disclaimer: Players may not use an external device or attachment
            that modifies the game’s controls in the tournament
          </span>
        </div>
      </div>
    );
  }
}

export default XperiaCOD;
