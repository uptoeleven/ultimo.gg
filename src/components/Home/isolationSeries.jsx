import React, { Component } from "react";

// Css
import "../../style/homePage/isolationSection.scss";

// image
import Logo from "../../assets/homePage/isolation-logo.svg";

import TctLogo from "../../assets/homePage/ninjaLogo.png";
import Ninja from "../../assets/homePage/teenageLogo.png";
import Asu from "../../assets/homePage/asuLogo.png";

class IsolationSeries extends Component {
  state = {};
  render() {
    return (
      <div className='isolation'>
        <div className='isolation_content'>
          <div className='isolation_content-image'>
            <img src={Logo} alt='isolation'></img>
          </div>
          <h1 className='isolation_content-title'>ISOLATION SERIES</h1>
          <div className='isolation_content-partner'>
            <h1 className='title-block'>OUR PARTNERS</h1>
            <div className='image-container'>
              <img src={TctLogo} alt='teenage cancer trust'></img>
              <img src={Ninja} alt='ninja'></img>
              <img src={Asu} alt='asu-gaming'></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IsolationSeries;
