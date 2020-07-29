import React, { Component } from "react";

// css
import "../../style/contactUs/contactUsBanner.scss";

// Image
import Helment from "../../assets/homePage/helmet-background.svg";

class ContactUsBanner extends Component {
  state = {};
  render() {
    return (
      <div className='contactUs-banner'>
        <div className='background-one'></div>
        <div className='background-two'></div>
        <h1>CONTACT US</h1>
      </div>
    );
  }
}

export default ContactUsBanner;
