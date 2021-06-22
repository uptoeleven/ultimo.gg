import React, { Component } from "react";
import { Link } from "react-router-dom";
// CSS
import "../../style/homePage/platformSection.scss";

// icons
import Logo from "../../assets/homePage/ultimoGGLogo.svg";
import Coin from "../../assets/homePage/ULTGG-Coin.svg";

class PlatformSection extends Component {
  state = {};
  render() {
    return (
      <div className='platform-wrapper-container'>
        {/* <div className='platform'>
          <div className='platform_wrapper'>
            <div className='platform_image'>
              <img src={Logo} alt='Ultimo GG'></img>
            </div>
            <div className='platform_content'>
              <h1 className='platform_content_title'>
                THE GAME-CHANGING
                <br />
                <span className='title-color-change'>ESPORTS PLATFORM</span>
              </h1>
              <p className='platform_content_text-block'>
                Ultimo GG is a game-changing esports platform that gives gamers
                of all skill levels the chance to compete on an even playing
                field for incredible prizes. Players can hone their skills,
                learn, and engage with a global community with a place for
                everyone, from content creators to the esports elite.
              </p>
              <div className='link-text'>
                <span>
                  WHAT ARE YOU WAITING FOR,
                  <br /> WARRIORS?
                </span>
                <a href='#'>SIGN UP TODAY</a>
              </div>
              <Link to='/signUp'>
                <div className='sign-up_button'></div>
              </Link>
            </div>
          </div>
        </div> */}

        <div className='platform'>
          <div className='platform-wapper'>
            <div className='platform_image'>
              <img src={Coin} alt='Ultimo GG'></img>
            </div>
            <div className='platform_content'>
              <h1 className='platform_content_title'>
                THE GAME CHANGING
                <br />
                <span className='title-color-change'>ESPORTS TOKEN</span>
              </h1>
              <p className='platform_content_text-block'>
                ULTGGs, is the revolutionary gaming token from Ultimo GG. Get
                rewarded for everything you do on the platform, from winning
                tournaments to creating content and contributing to the
                community, then spend your ULTGGs on the ULTIMO GG platform and
                our partners. Purchase NFTs or even create your own featuring
                your greatest gaming moments with ULTIMO GG or convert ULTGGs
                into real-world money to turn your dream of a career in gaming
                into a reality.
              </p>
              <p className='platform_content_text-block'>
                ULTGG will democratise esports and give gamers & content
                creators around the world the power to build a better future
                through gaming and set to rival YouTube & Twitch.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlatformSection;
