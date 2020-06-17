import React, { Component } from "react";
import Slider from "react-slick";
// Css
import "../../style/homePage/hero.scss";

// Images
import BannerImageOne from "../../assets/homePage/ultimo_stadium.jpg";
import BannerImageTwo from "../../assets/homePage/ultimo_banner.png";

import UltimoWarrior from "../../assets/homePage/ultimoWarrior.svg";

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
                style={{ backgroundImage: `url(${BannerImageOne})` }}></div>
            </div>
            <div>
              <div
                className='carosel-image'
                style={{ backgroundImage: `url(${BannerImageTwo})` }}></div>
            </div>
          </Slider>
        </div>
        <div className='hero-content'>
          <h2 className='hero-content_title'>BECOME AN ULTIMO WARRIOR</h2>
          <p className='hero-content_text'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <span className='sign-up_button'></span>
        </div>
        <div className='hero-image'>
          <img src={UltimoWarrior} alt='Warrior'></img>
        </div>
      </div>
    );
  }
}

export default HomeBanner;
