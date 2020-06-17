import React, { Component } from "react";

// CSS
import "../../style/homePage/info.scss";

// icons
import Intuative from "../../assets/homePage/intuative-icon.svg";
class InfoSection extends Component {
  state = {};
  render() {
    return (
      <div className='info'>
        <div className='info_content'>
          <div className='info_content-image'>
            <img src={Intuative} alt='intuative'></img>
          </div>
          <div className='info_content-title'>INTUATIVE PLATFORM</div>
          <div className='info_content-text'>
            Lorum Ipsum dolor sit amet, cpmsecletir
          </div>
        </div>
      </div>
    );
  }
}

export default InfoSection;
