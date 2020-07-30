import React, { Component } from "react";

// css
import "../../style/homePage/partnerComponent.scss";

// logos
import Ninja from "../../assets/homePage/ninjaLogo.png";
import TctLogo from "../../assets/homePage/teenageLogo.png";
import Asu from "../../assets/homePage/asuLogo.png";
class PartnersComponent extends Component {
  state = {};
  render() {
    return (
      <div className='partner'>
        <div className='partner-content'>
          <div className='image-container'>
            <img src={TctLogo} alt='teenage cancer trust'></img>
            <img src={Ninja} alt='ninja'></img>
            <img src={Asu} alt='asu-gaming'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default PartnersComponent;
