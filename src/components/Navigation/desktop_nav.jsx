import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// css
import "../../style/nav/navDesktop.scss";

// icons
import TournamentsIcon from "../../assets/Nav/Tournaments.svg";
import SignUpIcon from "../../assets/Nav/SIgn_Up.svg";
import MerchIcon from "../../assets/Nav/Merch_Store.svg";
import VideoIcon from "../../assets/Nav/Video_Library.svg";
import BootcampIcon from "../../assets/Nav/Bootcamp.svg";
import DiscordIcon from "../../assets/Nav/Discord.svg";
import ContactIcon from "../../assets/Nav/Contact_Us.svg";

class DesktopNav extends Component {
  state = {};
  render() {
    return (
      <>
        <div className='desktop-nav'>
          <NavLink exact activeClassName='activeRoute' to='/'>
            <div className='desktop-nav_button'>
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink activeClassName='activeRoute' to='/tournaments'>
            <img src={TournamentsIcon} alt='Tournaments Icon'></img>
            <span>TOURNAMENTS</span>
          </NavLink>
          <NavLink activeClassName='activeRoute' to='/signUp'>
            <img src={SignUpIcon} alt='SignUp Icon'></img>
            <span>SIGN UP</span>
          </NavLink>
          <NavLink activeClassName='activeRoute' to='/store'>
            <img src={MerchIcon} alt='Merch Icon'></img>
            <span>MERCH STORE</span>
          </NavLink>
          <NavLink activeClassName='activeRoute' to='/VideoLibary'>
            <img src={VideoIcon} alt='Video Icon'></img>
            <span>VIDEO LIBARY</span>
          </NavLink>
          <NavLink activeClassName='activeRoute' to='/Bootcamp'>
            <img src={BootcampIcon} alt='Bootcamp Icon'></img>
            <span>BOOTCAMP</span>
          </NavLink>
          <NavLink activeClassName='activeRoute' to='/Discord'>
            <img src={DiscordIcon} alt='Discord Icon'></img>
            <span>DISCORD</span>
          </NavLink>
          <NavLink activeClassName='activeRoute' to='/ContactUs'>
            <img src={ContactIcon} alt='ContactUs Icon'></img>
            <span>CONTACT US</span>
          </NavLink>
        </div>
      </>
    );
  }
}

export default DesktopNav;
