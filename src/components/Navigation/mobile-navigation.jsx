import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Footer/footer.svg";

// css
import "../../style/nav/mobileNav.scss";

// icons
import TournamentsIcon from "../../assets/Nav/Tournaments.svg";
import SignUpIcon from "../../assets/Nav/SIgn_Up.svg";
import MerchIcon from "../../assets/Nav/Merch_Store.svg";
import VideoIcon from "../../assets/Nav/Video_Library.svg";
import BootcampIcon from "../../assets/Nav/Bootcamp.svg";
import DiscordIcon from "../../assets/Nav/Discord.svg";
import ContactIcon from "../../assets/Nav/Contact_Us.svg";

class MobileNav extends Component {
  state = {
    navButtons: [
      {
        icon: TournamentsIcon,
        text: "Home",
        page: "/",
      },
      {
        icon: TournamentsIcon,
        text: "Tournaments",
        page: "/tournaments",
      },
      {
        icon: SignUpIcon,
        text: "Sign Up",
        page: "/signUp",
      },
      {
        icon: MerchIcon,
        text: "Merch Store",
        page: "/store",
      },
      {
        icon: VideoIcon,
        text: "Video Libary",
        page: "/VideoLibary",
      },
      {
        icon: BootcampIcon,
        text: "Bootcamp",
        page: "/Bootcamp",
      },
      {
        icon: DiscordIcon,
        text: "Discord",
        page: "/Discord",
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

    return (
      <>
        <div className='mobile'>
          <div className='mobile-nav-bar'>
            <img src={Logo} alt='logo' />

            <div
              onClick={this.props.toggle}
              className={`hamburger-menu ${toggle}`}>
              <div className='bar1'></div>
              <div className='bar2'></div>
              <div className='bar3'></div>
            </div>
          </div>
          <div
            className='mobile-nav'
            style={{ transform: slide, top: positionNav }}>
            {this.state.navButtons.map((button) => (
              <NavLink
                exact
                className='mobile-nav-button'
                activeClassName='active-mobile'
                to={button.page}>
                <div onClick={this.props.toggle} className='button-label'>
                  <img src={button.icon} alt='Home'></img>
                  <span>{button.text}</span>
                </div>
                <span className='dot'></span>
              </NavLink>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default MobileNav;
