import React, { Component } from "react";

// css
import "../../style/contactUs/socialChannels.scss";

// icons
import Discord from "../../assets/Footer/Discord.svg";
import Facebook from "../../assets/Footer/Facebook.svg";
import Instagram from "../../assets/Footer/Instagram.svg";
import Twitch from "../../assets/Footer/Twitch.svg";
import YouTube from "../../assets/Footer/Youtube.svg";
import LinkedIn from "../../assets/Footer/Linkedin.svg";

class SocialSection extends Component {
  state = {};
  render() {
    return (
      <div className='social-section'>
        <h1>FOLLOW OUR SOCIAL CHANNELS</h1>
        <div className='social-section_container'>
          <img src={Discord} alt='discord'></img>
          <img src={Facebook} alt='facebook'></img>
          <img src={Instagram} alt='instagram'></img>
          <img src={Twitch} alt='twich'></img>
          <img src={YouTube} alt='youtube'></img>
          <img src={LinkedIn} alt='linkedin'></img>
        </div>
      </div>
    );
  }
}

export default SocialSection;
