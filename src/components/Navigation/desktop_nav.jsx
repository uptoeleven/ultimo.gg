import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// css
import "../../style/nav/navDesktop.scss";
import Logo from "../../assets/Nav/homeLogo.svg";
import LogoActive from "../../assets/Nav/Logo.svg";

// icons
import TournamentsIcon from "../../assets/Nav/Tournaments.svg";
import TournamentIconActive from "../../assets/Nav/torn-icon.svg";

import SignUpIcon from "../../assets/Nav/SIgn_Up.svg";
import SignUpActive from "../../assets/Nav/SignupActive.svg";
import MerchIcon from "../../assets/Nav/Merch_Store.svg";
import MechActive from "../../assets/Nav/team-icon.svg";
import VideoIcon from "../../assets/Nav/Video_Library.svg";
import VideoIconActive from "../../assets/Nav/VideolibaryActive.svg";
import BootcampIcon from "../../assets/Nav/Bootcamp.svg";
import BootcampActive from "../../assets/Nav/Bootcamp-icon.svg";
import DiscordIcon from "../../assets/Nav/Discord.svg";
import DiscordActive from "../../assets/Nav//Discordactive.svg";
import ContactIcon from "../../assets/Nav/Contact_Us.svg";
import ContactActive from "../../assets/Nav/Contact.svg";

class DesktopNav extends Component {
  state = {};

  openWindow = () => {
    window.open("https://discord.com/invite/e9p5YZE");
  };

  render() {
    return (
      <>
        <div className='desktop-nav'>
          <NavLink exact activeClassName='activeRoute' to='/'>
            <div className='desktop-nav_button'>
              <img className='home-logo' src={Logo} alt='Home Logo'></img>
              <img
                className='home-logo home-logo-active'
                src={LogoActive}
                alt='Home Logo'></img>
            </div>
          </NavLink>
          <NavLink activeClassName='activeRoute' to='/tournaments'>
            <img
              className='home-logo'
              src={TournamentsIcon}
              alt='Tournaments Icon'></img>
            <img
              className='home-logo home-logo-active'
              src={TournamentIconActive}
              alt='Tournaments Icon'></img>
            <span>TOURNAMENTS</span>
          </NavLink>
          <NavLink activeClassName='activeRoute' to='/signup'>
            <img className='home-logo' src={SignUpIcon} alt='SignUp Icon'></img>
            <img
              className='home-logo home-logo-active'
              src={SignUpActive}
              alt='Tournaments Icon'></img>
            <span>SIGN UP</span>
          </NavLink>
          <NavLink activeClassName='activeRoute' to='/store'>
            <img className='home-logo' src={MerchIcon} alt='Merch Icon'></img>
            <img
              className='home-logo home-logo-active'
              src={MechActive}
              alt='Tournaments Icon'></img>
            <span>MERCH STORE</span>
          </NavLink>
          <NavLink activeClassName='activeRoute' to='/VideoLibrary'>
            <img className='home-logo' src={VideoIcon} alt='Video Icon'></img>
            <img
              className='home-logo home-logo-active'
              src={VideoIconActive}
              alt='Tournaments Icon'></img>
            <span>VIDEO LIBRARY</span>
          </NavLink>
          <NavLink activeClassName='activeRoute' to='/Bootcamp'>
            <img
              className='home-logo'
              src={BootcampIcon}
              alt='Bootcamp Icon'></img>
            <img
              className='home-logo home-logo-active'
              src={BootcampActive}
              alt='Tournaments Icon'></img>
            <span>BOOTCAMP</span>
          </NavLink>
          <a href='#' onClick={this.openWindow} activeClassName='activeRoute'>
            <img
              className='home-logo'
              src={DiscordIcon}
              alt='Discord Icon'></img>
            <img
              className='home-logo home-logo-active'
              src={DiscordActive}
              alt='Tournaments Icon'></img>
            <span>DISCORD</span>
          </a>
          <NavLink activeClassName='activeRoute' to='/ContactUs'>
            <img
              className='home-logo'
              src={ContactIcon}
              alt='ContactUs Icon'></img>
            <img
              className='home-logo home-logo-active'
              src={ContactActive}
              alt='Tournaments Icon'></img>
            <span>CONTACT US</span>
          </NavLink>
          <NavLink activeClassName='activeRoute' to='/Sony'>
            <span>Sony</span>
          </NavLink>
        </div>
      </>
    );
  }
}

export default DesktopNav;
