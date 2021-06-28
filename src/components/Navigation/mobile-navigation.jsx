import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Footer/footer.svg";

// css
import "../../style/nav/mobileNav.scss";

// icons
import logo from "../../assets/Nav/Logo.svg";
import TournamentsIcon from "../../assets/Nav/Tournaments.svg";
import SignUpIcon from "../../assets/Nav/SIgn_Up.svg";
import MerchIcon from "../../assets/Nav/Merch_Store.svg";
import VideoIcon from "../../assets/Nav/Video_Library.svg";
import BootcampIcon from "../../assets/Nav/Bootcamp.svg";
import DiscordIcon from "../../assets/Nav/Discord.svg";
import ContactIcon from "../../assets/Nav/Contact_Us.svg";
import Xperia from "../../assets/Nav/Xperia.svg";

import Token from "../../assets/Nav/ult-tab-normal.svg";

class MobileNav extends Component {
  state = {
    navButtons: [
      {
        icon: logo,
        text: "Home",
        page: "/",
      },
      {
        text: "ULTGG",
        page: "OTher",
      },
      {
        icon: TournamentsIcon,
        text: "Tournaments",
        page: "/tournaments",
      },

      {
        icon: MerchIcon,
        text: "Merch Store",
        page: "/store",
      },
      {
        icon: VideoIcon,
        text: "Video Libary",
        page: "/VideoLibrary",
      },
      {
        icon: BootcampIcon,
        text: "Bootcamp",
        page: "/Bootcamp",
      },

      {
        icon: ContactIcon,
        text: "Contact Us",
        page: "/ContactUs",
      },
    ],
  };

  render() {
    // states of change
    let toggle = this.props.navState === true ? "change" : "";
    let slide =
      this.props.navState === true ? "translateX(0%)" : "translateX(-100%)";
    let positionNav =
      this.props.navState === false ? `${this.props.windowPos + 80}px` : "";
    let fixer = this.props.navState === true ? "fixed" : "absolute";
    return (
      <>
        <div className='mobile'>
          <div className='mobile-nav-bar'>
            <img src={Logo} alt='logo' />

            <div
              onClick={this.props.toggle}
              className={`hamburger-menu ${toggle}`}
            >
              <div className='bar1'></div>
              <div className='bar2'></div>
              <div className='bar3'></div>
            </div>
          </div>
          <div
            className='mobile-nav'
            style={{ transform: slide, top: positionNav, position: fixer }}
          >
            {this.state.navButtons.map((button, index) =>
              index === 1 ? (
                <div className='mobile-nav-button'>
                  <a href='https://ultgg.io/' target='__blank'>
                    <div onClick={this.props.toggle} className='button-label'>
                      <img src={Token} alt='Home'></img>
                      <span>ULTGG</span>
                    </div>
                    <span className='dot'></span>
                  </a>
                </div>
              ) : (
                <NavLink
                  key={index}
                  exact
                  className='mobile-nav-button'
                  activeClassName='active-mobile'
                  to={button.page}
                >
                  <a href={button.link}>
                    <div onClick={this.props.toggle} className='button-label'>
                      <img src={button.icon} alt='Home'></img>
                      <span>{button.text}</span>
                    </div>
                    <span className='dot'></span>
                  </a>
                </NavLink>
              )
            )}
            <div className='mobile-nav-button'>
              <a href='https://discord.com/invite/e9p5YZE'>
                <div onClick={this.props.toggle} className='button-label'>
                  <img src={DiscordIcon} alt='Home'></img>
                  <span>Discord</span>
                </div>
                <span className='dot'></span>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MobileNav;
