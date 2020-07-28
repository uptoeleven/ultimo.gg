import React, { Component } from "react";
import Slider from "react-slick";

import "../../style/Shop/banner.scss";

class StoreCarosel extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className='merch_banner'>
        <div
          className='merch_banner-img'
          style={{ backgroundImage: `url(${this.props.img})` }}></div>
      </div>
    );
  }
}

export default StoreCarosel;
