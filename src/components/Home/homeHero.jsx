import React, { Component } from "react";
import Slider from "react-slick";
// Css
import "../../style/homePage/hero.scss";

// Images

import BannerImageTwo from "../../assets/homePage/ultimo_banner.png";
import BannerImageThree from "../../assets/shop/BFGBanner.png";
import BannerImageFour from "../../assets/homePage/UltimoGG_Web-90.jpg";
import AFCBbanner from "../../assets/homePage/afcb-banner.jpg";
import UltimoGGToken from "../../assets/homePage/ULTGG-01.png";
import WinBig from "../../assets/homePage/ULTGG-02.png";
import TurnPro from "../../assets/homePage/UltimoGG-01.png";

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
                style={{ backgroundImage: `url(${AFCBbanner})` }}
              >
                <button
                  onClick={() =>
                    this.openbanner(
                      "https://challonge.com/communities/UltimoGG/tournaments"
                    )
                  }
                  className='hero-button'
                ></button>
              </div>
            </div>
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${BannerImageTwo})` }}
              ></div>
            </div>

            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${BannerImageThree})` }}
              >
                <button
                  onClick={() => this.openbanner("https://ultimomerch.com/")}
                  className='hero-button'
                ></button>
              </div>
            </div>
            <div>
              <div
                className='carosel-image fix-height'
                style={{
                  backgroundImage: `url(${BannerImageFour})`,
                  backgroundPosition: "0 -150px",
                }}
              >
                <button
                  onClick={() => this.openbanner("https://ultimomerch.com/")}
                  className='hero-button'
                ></button>
              </div>
            </div>
          </Slider>
        </div>
        <div
          className='hero-mobile'
          style={{ backgroundImage: `url(${AFCBbanner})` }}
        ></div>

        <div className='hero-image'></div>
      </div>
    );
  }
}

export default HomeBanner;
