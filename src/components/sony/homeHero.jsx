import React, { Component } from "react";

// css
import "../../style/sony/homeHero.scss";

// image
import homeLogo from "../../assets/sony/ultimo-xperia.png";
import ultimoLogo from "../../assets/sony/ultimo-logo.svg";
import crown from "../../assets/sony/crown.svg";
import sony from "../../assets/sony/sony-logo.svg";

class HomeHero extends Component {
  state = {};
  render() {
    return (
      <div className='hero-banner'>
        <h2 className='date'>22 AUGUST 2020</h2>
        <div className='home-logo'>
          <img src={homeLogo} alt='sony_xperia'></img>
        </div>
        <div className='sponsors'>
          <img src={ultimoLogo} alt='ultimo'></img>
          <img src={crown} alt='ultimo'></img>
          <img src={sony} alt='ultimo'></img>
        </div>
      </div>
    );
  }
}

export default HomeHero;
