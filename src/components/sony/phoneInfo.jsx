import React, { Component } from "react";

import xperia from "../../assets/sony/xperia-logo.png";

import "../../style/sony/phoneInfo.scss";

class PhoneInfo extends Component {
  state = {};
  render() {
    return (
      <div className='info-phone'>
        <div className='wrapper'>
          <img className='xperia-logo' src={xperia} alt='xperia-logo'></img>
          <p className='text-block'>
            The 21:9 Cinemawide™ 6.5” 4K OLED display offers a wide angle view
            for unobstructed gameplay, while a Qualcomm Snapdragon 865 processor
            and 8gb of RAM ensures a smooth experience. Offering hassle free
            pairing with the PlayStation®4’s DUALSHOCK®4 Wireless Controller,
            Remote Play capabilities, front facing speakers and a 3.5mm
            headphone jack, the device naturally offers premium gaming,
            anywhere.
          </p>
        </div>
      </div>
    );
  }
}

export default PhoneInfo;
