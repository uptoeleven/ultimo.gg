import React, { Component } from "react";
import Slider from "react-slick";
// Css
import "../../style/homePage/hero.scss";

// Images

import BannerImageTwo from "../../assets/homePage/ultimo_banner.png";
import BannerImageThree from "../../assets/shop/BFGBanner.png";
import BannerImageFour from "../../assets/homePage/UltimoGG_Web-90.jpg";
import Brumbanner from "../../assets/homePage/Brum-Announcement-Banner.jpg";
import UltimoGGToken from "../../assets/homePage/ULTGG-01.jpg";
import WinBig from "../../assets/homePage/ULTGG-02.jpg";
import TurnPro from "../../assets/homePage/UltimoGG-01.jpg";
import BtobBanner from "../../assets/homePage/btob-banner.jpg";
import TournBanner from "../../assets/homePage/ULTGG-series.jpg";

class HomeBanner extends Component {
  openbanner = (url) => {
    window.open(url);
  };
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
                style={{ backgroundImage: `url(${BtobBanner})` }}
              ></div>
            </div>
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${TournBanner})` }}
              ></div>
            </div>
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${UltimoGGToken})` }}
              ></div>
            </div>
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${WinBig})` }}
              ></div>
            </div>
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${TurnPro})` }}
              ></div>
            </div>
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${Brumbanner})` }}
              ></div>
            </div>
          </Slider>
        </div>
        <div
          className='hero-mobile'
          style={{ backgroundImage: `url(${Brumbanner})` }}
        ></div>

        <div className='hero-image'></div>
      </div>
    );
  }
}

export default HomeBanner;
