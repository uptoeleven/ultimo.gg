import React, { Component } from "react";
import { Link } from "react-router-dom";

// css
import "../../style/Footer/footer.scss";

// logo
import Logo from "../../assets/Footer/footer.svg";

import Discord from "../../assets/Footer/Discord.svg";
import Telegram from "../../assets/Footer/Telegram.svg";
import Instagram from "../../assets/Footer/Instagram.svg";
import Twitch from "../../assets/Footer/Twitch.svg";
import YouTube from "../../assets/Footer/Youtube.svg";
import LinkedIn from "../../assets/Footer/Linkedin.svg";
import Twitter from "../../assets/Footer/Twitter.svg";

class DesktopFooter extends Component {
  state = {};

  openSocial = (url) => {
    window.open(url);
  };
  render() {
    return (
      <div className='footer'>
        <img className='footer-logo' src={Logo} alt='logo' />

        <div className='footer_content'>
          <div className='footer_content-links pages'>
            <h1 className='title'>PAGES</h1>
            <div className='text-block footer-mobile'>
              <Link to='/tournaments'>TOURNAMENTS</Link>
              <Link to='/signup'>SIGN UP</Link>
              <Link to='/store'>MERCH STORE</Link>
              <Link to='/VideoLibrary'>VIDEO LIBRARY</Link>
              <Link to='/Bootcamp'>BOOTCAMP</Link>
              <a href='https://discord.com/invite/e9p5YZE'>DISCORD</a>
              <Link to='/ContactUs'>CONTACT US</Link>
            </div>
            <div className='text-block col-2 margin-footer'>
              <Link to='/tournaments'>TOURNAMENTS</Link>
              <Link to='/signup'>SIGN UP</Link>
              <Link to='/store'>MERCH STORE</Link>
              <Link to='/VideoLibrary'>VIDEO LIBRARY</Link>
            </div>
            <div className='text-block col-2'>
              <Link to='/Bootcamp'>BOOTCAMP</Link>
              <a href='https://discord.com/invite/e9p5YZE'>DISCORD</a>
              <Link to='/ContactUs'>CONTACT US</Link>
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
              <a href='#'>INFO@ULTIMOGG.COM</a>
              <a href='#'>TOURNAMENTS@ULTIMOGG.COM</a>
              <a href='#'>PARTNERSHIPS@ULTIMOGG.COM</a>
            </div>
          </div>
          <div className='footer_content-links icon'>
            <h1 className='title'>FOLLOW US</h1>
            <div className='icon-block'>
              <div className='icon-block footer-mobile'>
                <img
                  src={Discord}
                  onClick={() =>
                    this.openSocial("https://discord.com/invite/e9p5YZE")
                  }
                  alt='discord'
                ></img>
                <img
                  src={Telegram}
                  onClick={() => this.openSocial("https://t.me/ultgg")}
                  alt='facebook'
                ></img>
                <img
                  src={Instagram}
                  onClick={() =>
                    this.openSocial("https://www.instagram.com/ultimo.gg")
                  }
                  alt='instagram'
                ></img>
                <img
                  src={Twitch}
                  onClick={() => this.openSocial("http://twitch.tv/UltimoGG")}
                  alt='twich'
                ></img>
                <img
                  src={YouTube}
                  onClick={() =>
                    this.openSocial(
                      "https://www.youtube.com/channel/UCvfH-N53wPvInD2qGRqMyQA?disable_polymer=true"
                    )
                  }
                  alt='youtube'
                ></img>
                <img
                  src={Twitter}
                  onClick={() =>
                    this.openSocial("https://www.twitter.com/ultimoggesports")
                  }
                  alt='linkedin'
                ></img>
              </div>

              <div className='block'>
                <img
                  src={Discord}
                  onClick={() =>
                    this.openSocial("https://discord.com/invite/e9p5YZE")
                  }
                  alt='discord'
                ></img>
                <img
                  src={Telegram}
                  onClick={() => this.openSocial("https://t.me/ultgg")}
                  alt='facebook'
                ></img>
                <img
                  src={Instagram}
                  onClick={() =>
                    this.openSocial("https://www.instagram.com/ultimo.gg")
                  }
                  alt='instagram'
                ></img>
              </div>

              <div className='block'>
                <img
                  src={Twitch}
                  onClick={() => this.openSocial("http://twitch.tv/UltimoGG")}
                  alt='twich'
                ></img>
                <img
                  src={YouTube}
                  onClick={() =>
                    this.openSocial(
                      "https://www.youtube.com/channel/UCvfH-N53wPvInD2qGRqMyQA?disable_polymer=true"
                    )
                  }
                  alt='youtube'
                ></img>
                <img
                  src={Twitter}
                  onClick={() =>
                    this.openSocial("https://www.twitter.com/ultimoggesports")
                  }
                  alt='linkedin'
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopFooter;
