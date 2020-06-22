import React, { Component } from "react";
import { Link } from "react-router-dom";

// css
import "../../style/Footer/footer.scss";

// logo
import Logo from "../../assets/Footer/footer.svg";

import Discord from "../../assets/Footer/Discord.svg";
import Facebook from "../../assets/Footer/Facebook.svg";
import Instagram from "../../assets/Footer/Instagram.svg";
import Twitch from "../../assets/Footer/Twitch.svg";
import YouTube from "../../assets/Footer/Youtube.svg";
import LinkedIn from "../../assets/Footer/Linkedin.svg";

class DesktopFooter extends Component {
  state = {};
  render() {
    return (
      <div className='footer'>
        <img className='footer-logo' src={Logo} alt='logo' />

        <div className='footer_content'>
          <div className='footer_content-links pages'>
            <h1 className='title'>PAGES</h1>
            <div className='text-block col-2'>
              <Link>TOURNAMENTS</Link>
              <Link>SIGN UP</Link>
              <Link>MERCH STORE</Link>
              <Link>VIDEO LIBRARY</Link>
            </div>
            <div className='text-block col-2'>
              <Link>BOOTCAMP</Link>
              <Link>DISCORD</Link>
              <Link>CONTACT US</Link>
            </div>
          </div>
          <div className='footer_content-links'>
            <h1 className='title'>LEGAL</h1>
            <div className='text-block '>
              <Link>TERMS & CONDITIONS</Link>
              <Link>PRIVACY POLICY</Link>
            </div>
          </div>
          <div className='footer_content-links contact'>
            <h1 className='title'>CONTACT US</h1>
            <div className='text-block '>
              <a href='#'>INFO@ULTIMOWARRIOR.COM</a>
              <a href='#'>INFO@ULTIMOWARRIOR.COM</a>
              <a href='#'>INFO@ULTIMOWARRIOR.COM</a>
            </div>
          </div>
          <div className='footer_content-links icon'>
            <h1 className='title'>FOLLOW US</h1>
            <div className=' icon-block'>
              <div className='block'>
                <img src={Discord} alt='discord'></img>
                <img src={Facebook} alt='facebook'></img>
                <img src={Instagram} alt='instagram'></img>
              </div>

              <div className='block'>
                <img src={Twitch} alt='twich'></img>
                <img src={YouTube} alt='youtube'></img>
                <img src={LinkedIn} alt='linkedin'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopFooter;
