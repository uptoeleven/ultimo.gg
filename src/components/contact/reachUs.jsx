import React, { Component } from "react";

// logos
import Headset from "../../assets/Nav/Contact_Us.svg";

// css
import "../../style/contactUs/reachUs.scss";

class ReachUs extends Component {
  state = {};
  render() {
    return (
      <div className='reachUs-container'>
        <h1 className='title-block'>HOW TO REACH US</h1>
        <div className='content'>
          <img src={Headset} alt='contact-us'></img>
          <div className='text-block'>
            <span>GENRAL INFORMATION:</span> &nbsp;
            <a href='#'>info@ultimowarrior.com</a>
          </div>
          <img src={Headset} alt='contact-us'></img>
          <div className='text-block'>
            <span>Tournament/Event info:</span> &nbsp;
            <a href='#'>tournaments@ultimowarrior.com</a>
          </div>
          <img src={Headset} alt='contact-us'></img>
          <div className='text-block'>
            <span>Branding & Sponsorship opportunities:</span> &nbsp;
            <a href='#'>partnerships@ultimowarrior.com</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ReachUs;
