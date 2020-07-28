import React, { Component } from "react";

// CSS
import "../../style/homePage/merchSection.scss";

// image
import MerchBackground from "../../assets/shop/ultimoteebanner.png";
import MerchIcon from "../../assets/Nav/Merch_Store.svg";

class MerchSection extends Component {
  state = {};
  render() {
    return (
      <div
        style={{ backgroundImage: `url(${MerchBackground})` }}
        class='merch_section'>
        <div className='merch_section-hover'>
          <p>SEE OUR RANGE OF MERCHENDISE</p>
          <img src={MerchIcon} alt='Merch Icon'></img>
          <p>MERCH STORE</p>
        </div>
      </div>
    );
  }
}

export default MerchSection;
