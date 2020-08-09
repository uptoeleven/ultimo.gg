import React, { Component } from "react";

import PhoneXperia from "../../assets/sony/xperiaPhone.png";

import "../../style/sony/phoneDetails.scss";

class PhoneDetails extends Component {
  state = {
    active: true,
  };

  showInfo = (e) => {
    let container = e.target.classList[1];

    document.getElementsByClassName(`mobile-${container}`)[0].style.opacity =
      "1";
    document.getElementsByClassName(`mobile-${container}`)[0].style.zIndex =
      "99";
  };

  closeInfo = (e) => {
    console.log(e.target.classList[1]);
    document.getElementsByClassName(e.target.classList[1])[0].style.opacity =
      "0";
    document.getElementsByClassName(e.target.classList[1])[0].style.zIndex =
      "2";
  };

  render() {
    return (
      <div className='details-container'>
        <div className='phone-container'>
          <div
            className='dot-mobile tripple-lense'
            onClick={this.showInfo}></div>
          <div
            className='dot-mobile water-resistant'
            onClick={this.showInfo}></div>
          <div className='dot-mobile battery' onClick={this.showInfo}></div>
          <div className='dot-mobile speed' onClick={this.showInfo}></div>
          <div className='dot-mobile display' onClick={this.showInfo}></div>
          <div className='dot-mobile game' onClick={this.showInfo}></div>
          <div className='dot-mobile pro' onClick={this.showInfo}></div>
          <div
            className='details-content-mobile mobile-tripple-lense'
            onClick={this.closeInfo}>
            <h3 className='title-block'>Tripple Lense Camera</h3>
            <span className='text-block'>
              Incorporating industry leading Sony Alpha technology, ZEISS optics
              calibrated specifically for Xperia with 3D iToF.
            </span>
          </div>
          <div
            className='details-content-mobile mobile-water-resistant'
            onClick={this.closeInfo}>
            <h3 className='title-block'>Water Resistant.</h3>
            <span className='text-block'>
              Incorporating industry leading Sony Alpha technology, ZEISS optics
              calibrated specifically for Xperia with 3D iToF.
            </span>
          </div>

          <div
            className='details-content-mobile mobile-battery'
            onClick={this.closeInfo}>
            <h3 className='title-block'>4,000mAh battery.</h3>
            <span className='text-block'>
              With fast charge that charges up to 50% in just 30 minutes14 and
              features Qi fast wireless charging for a fast battery boost on the
              move.
            </span>
          </div>
          <div
            className='details-content-mobile mobile-speed'
            onClick={this.closeInfo}>
            <h3 className='title-block'>Built for Speed..</h3>
            <span className='text-block'>
              The 5G enabled Xperia 1 II was created with professional workflow
              in mind.
            </span>
          </div>
          <div
            className='details-content-mobile mobile-display'
            onClick={this.closeInfo}>
            <h3 className='title-block'>4K HDR OLED Display.</h3>
            <span className='text-block'>
              21:9 CinemaWide 6.5” 4K HDR OLED display6 delivers unprecedented
              colour accuracy with Creator mode “powered by CineAlta”.
            </span>
          </div>
          <div
            className='details-content-mobile mobile-game'
            onClick={this.closeInfo}>
            <h3 className='title-block'>Game Enhancer.</h3>
            <span className='text-block'>
              A feature that was first introduced on Xperia 1 to enhance the
              mobile gaming experience, has been improved with additional
              functionality
            </span>
          </div>
          <div
            className='details-content-mobile mobile-pro'
            onClick={this.closeInfo}>
            <h3 className='title-block'>Cinematography Pro.</h3>
            <span className='text-block'>
              Can record in multiple frame rates and offer more manual controls
              such as touch auto focus and custom white balance to enhance your
              cinematographic shooting experiences.
            </span>
          </div>

          <div className='details-content left tripple-lense'>
            <div className=' dot dot-left'></div>
            <div className=' bar bar-left'></div>
            <h3 className='title-block'>Tripple Lense Camera</h3>
            <span className='text-block'>
              Incorporating industry leading Sony Alpha technology, ZEISS optics
              calibrated specifically for Xperia with 3D iToF.
            </span>
          </div>
          <div className='details-content left water-resistant'>
            <div className='dot dot-left'></div>
            <div className=' bar bar-left'></div>
            <h3 className='title-block'>Water Resistant.</h3>
            <span className='text-block'>
              The Xperia 1 II comes with IP65/68 water resistance and Corning®
              Gorilla® Glass 6 on both sides, making it sturdy as well as
              beautifully designed.
            </span>
          </div>
          <div className='details-content left battery'>
            <div className='dot dot-left'></div>
            <div className=' bar bar-left'></div>
            <h3 className='title-block'>4,000mAh battery.</h3>
            <span className='text-block'>
              With fast charge that charges up to 50% in just 30 minutes14 and
              features Qi fast wireless charging for a fast battery boost on the
              move.
            </span>
          </div>
          <div className='details-content right speed'>
            <div className='dot dot-right'></div>
            <div className='bar bar-right'></div>
            <h3 className='title-block'>Built for Speed..</h3>
            <span className='text-block'>
              The 5G enabled Xperia 1 II was created with professional workflow
              in mind.
            </span>
          </div>
          <div className='details-content right display'>
            <div className='dot dot-right'></div>
            <div className='bar bar-right'></div>
            <h3 className='title-block'>4K HDR OLED Display.</h3>
            <span className='text-block'>
              21:9 CinemaWide 6.5” 4K HDR OLED display6 delivers unprecedented
              colour accuracy with Creator mode “powered by CineAlta”.
            </span>
          </div>
          <div className='details-content right game'>
            <div className='dot dot-right'></div>
            <div className='bar bar-right'></div>
            <h3 className='title-block'>Game Enhancer.</h3>
            <span className='text-block'>
              A feature that was first introduced on Xperia 1 to enhance the
              mobile gaming experience, has been improved with additional
              functionality
            </span>
          </div>
          <div className='details-content right pro'>
            <div className='dot dot-right'></div>
            <div className='bar bar-right'></div>
            <h3 className='title-block'>Cinematography Pro.</h3>
            <span className='text-block'>
              Can record in multiple frame rates and offer more manual controls
              such as touch auto focus and custom white balance to enhance your
              cinematographic shooting experiences.
            </span>
          </div>
          <img src={PhoneXperia} alt='sony_phone'></img>
        </div>
      </div>
    );
  }
}

export default PhoneDetails;
