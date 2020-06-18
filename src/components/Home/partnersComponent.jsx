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
          <h1 className='title-block'>OUR PARTNERS</h1>
          <div className='image-container'>
            <img src={TctLogo} alt='teenage cancer trust'></img>
            <img src={Ninja} alt='ninja'></img>
            <img src={Asu} alt='asu-gaming'></img>
          </div>
          <div className='text-block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    );
  }
}

export default PartnersComponent;
