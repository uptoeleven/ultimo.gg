import React, { Component } from "react";
import Slider from "react-slick";
// Css
import "../../style/homePage/hero.scss";

// Images
import BannerImageOne from "../../assets/homePage/WarefareWednesdayBanner.png";
import BannerImageTwo from "../../assets/homePage/ultimo_banner.png";
import BannerImageThree from "../../assets/shop/BFGBanner.png";

class HomeBanner extends Component {
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
                style={{ backgroundImage: `url(${BannerImageTwo})` }}></div>
            </div>
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${BannerImageOne})` }}></div>
            </div>
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${BannerImageThree})` }}></div>
            </div>
          </Slider>
        </div>
        <div
          className='hero-mobile'
          style={{ backgroundImage: `url(${BannerImageOne})` }}></div>

        <div className='hero-image'></div>
      </div>
    );
  }
}

export default HomeBanner;
