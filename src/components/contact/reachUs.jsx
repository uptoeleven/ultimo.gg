import React, { Component } from "react";

// logos
import Headset from "../../assets/contact/headset.svg";
import Cup from "../../assets/contact/cup.svg";
import People from "../../assets/contact/People.svg";

// css
import "../../style/contactUs/reachUs.scss";

class ReachUs extends Component {
  state = {};
  render() {
    return (
      <div className='reachUs-container'>
        <h1 className='title-block'>HOW TO REACH US</h1>
        <div className='content'>
          <div className='block'>
            <img src={Headset} alt='contact-us'></img>
            <div className='text-block'>
              <p>GENERAL INFORMATION:</p>
              <p>
                <a href='#'>info@ultimogg.com</a>
              </p>
            </div>
          </div>
          <div className='block'>
            <img src={Cup} alt='contact-us'></img>
            <div className='text-block'>
              <p>Tournament/Event info:</p>
              <p>
                <a href='#'>tournaments@ultimogg.com</a>
              </p>
            </div>
          </div>
          <div className='block'>
            <img src={People} alt='contact-us'></img>
            <div className='text-block'>
              <p>Branding & Sponsorship opportunities:</p>
              <p>
                <a href='#'>partnerships@ultimogg.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReachUs;
