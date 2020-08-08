import React, { Component } from "react";
import Slider from "react-slick";

import "../../style/homePage/hero.scss";

import BannerImageOne from "../../assets/shop/ultimotbanner.png";
import BannerImageTwo from "../../assets/shop/BFGBanner.png";
import BannerImageThree from "../../assets/shop/ultimoteebanner.png";
import BannerImageFour from "../../assets/shop/1manwoman.png";
import BannerImageFive from "../../assets/shop/2men1woman.png";

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
      <div className='hero shop-hero'>
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
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${BannerImageThree})` }}></div>
            </div>
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${BannerImageFour})` }}></div>
            </div>
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${BannerImageFive})` }}></div>
            </div>
          </Slider>
        </div>
        <div
          className='hero-mobile'
          style={{ backgroundImage: `url(${BannerImageFour})` }}></div>

        <div className='hero-image'></div>
      </div>
    );
  }
}

export default StoreCarosel;
