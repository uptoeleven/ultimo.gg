import React, { Component } from "react";
import Slider from "react-slick";

import "../../style/homePage/hero.scss";

import BannerImageOne from "../../assets/homePage/ultimo_stadium.jpg";
import BannerImageTwo from "../../assets/homePage/ultimo_banner.png";

class StoreCarosel extends Component {
  state = {};
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className='hero'>
        <div className='hero-carosel'>
          <Slider {...settings}>
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${BannerImageOne})` }}></div>
            </div>
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${BannerImageTwo})` }}></div>
            </div>
          </Slider>
        </div>
        <div
          className='hero-mobile'
          style={{ backgroundImage: `url(${BannerImageOne})` }}></div>
      </div>
    );
  }
}

export default StoreCarosel;
