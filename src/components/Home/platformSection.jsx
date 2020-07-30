import React, { Component } from "react";
import { Link } from "react-router-dom";
// CSS
import "../../style/homePage/platformSection.scss";

// icons
import Logo from "../../assets/homePage/ultimoGGLogo.svg";

class PlatformSection extends Component {
  state = {};
  render() {
    return (
      <div className='platform'>
        <div className='platform_background'></div>
        <div className='platform_wrapper'>
          <div className='platform_content'>
            <h1 className='platform_content_title'>WELCOME TO ULTIMO GG</h1>
            <p className='platform_content_text-block'>
              Ultimo GG is a game-changing esports platform. It allows gamers of
              all skill levels to compete on an even playing field for their
              chance to win huge prizes, from cash to top spec hardware. Players
              can hone their skills and compete for recognition in weekly
              tournaments and ongoing leagues across their favourite titles.
              With the Ultimo Amateur Gaming League and fierce one-off flash
              tournaments, players are given the chance to move one step closer
              to a professional level. Bootcamps with players and coaches will
              help players along on their journey to esports stardom, while the
              platform provides a social hub for like-minded gamers to discuss,
              learn and become part of a thriving worldwide community. With
              killer content and the hottest news from the gaming world, Ultimo
              GG is the only place to be for everything gaming related. Esports
              has evolved. Sign up now.
            </p>
            <div className='link-text'>
              <a href='#'>SIGN UP NOW</a>
              &nbsp;
              <span>
                IF YOU HAVE WHAT IT <br></br> TAKES TO BECOME A WARRIOR
              </span>
            </div>
            <Link to='/signUp'>
              <div className='sign-up_button'></div>
            </Link>
          </div>
          <div className='platform_image'>
            <img src={Logo} alt='Ultimo GG'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default PlatformSection;
