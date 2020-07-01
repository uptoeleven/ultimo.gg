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
            <NavLink
              exact
              className='mobile-nav-button'
              activeClassName='active-mobile'
              to='/'>
              <div className='button-label'>
                <img src={TournamentsIcon} alt='Home'></img>
                <span>Home</span>
              </div>
              <span className='dot'></span>
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default MobileNav;
