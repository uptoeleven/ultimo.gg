import React, { Component } from "react";

// CSS
import "../../style/homePage/platformSection.scss";

class PlatformSection extends Component {
  state = {};
  render() {
    return (
      <div className='platform'>
        <div className='platform_background'></div>
        <div className='platform_content'>
          <h1 className='platform_content_title'>
            THE GAME-CHANGING ESPORTS PLATFORM
          </h1>
          <p className='platform_content_text-block'>
            Ultimo Warrior is a game-changing esports platform. It allows gamers
            of all skill levels to compete on an even playing field for their
            chance to win huge prizes from cash to top spec hardware. Players
            can hone their skills and compete for recognition in the ‘Global
            Amateur Gaming League’ or compete in fierce one-off flash
            tournaments moving them one step closer to a professional level.
            Alongside providing a competitive arena for players, the platform
            will act as a social hub for like-minded gamers & esports
            enthusiasts where they can discuss, learn and train through boot
            camps, 1-on-1 training sessions and live streaming tutorials with
            their favourite esports stars and names in the industry.
          </p>
          <div className='link-text'>
            <a href='#'>SIGN UP NOW</a>
            &nbsp;
            <span>IF YOU HAVE WHAT IT TAKES TO BECOME A WARRIOR</span>
          </div>
          <div className='sign-up_button-p'></div>
        </div>
      </div>
    );
  }
}

export default PlatformSection;
