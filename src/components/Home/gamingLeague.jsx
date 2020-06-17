import React, { Component } from "react";

// css
import "../../style/homePage/gamingLeague.scss";

// component
import Video from "./videoComponent";

// icons
import GamingLogo from "../../assets/homePage/amature-Gaming.svg";

class GamingLeague extends Component {
  state = {};
  render() {
    return (
      <div className='gaming'>
        <div className='gaming-background'></div>
        <div className='gaming_content'>
          <img
            className='gaming_content-icon'
            src={GamingLogo}
            alt='icon'></img>
          <h1 className='gaming_content-title'>
            THE GLOBAL AMATEUR GAMING LEAGUE
          </h1>
          <p className='gaming_content-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            consequat sapien. Aliquam erat volutpat. Donec in hendrerit justo,
            non rhoncus libero. Cras ac aliquam tortor. Integer maximus nulla
            quis leo sodales pulvinar. Donec eu luctus nibh, a luctus orci.
            Aliquam eu risus blandit, tincidunt nibh sit amet, egestas tellus.
            Donec fringilla et dui vitae lacinia. Nulla nec tempus turpis.
            Pellentesque enim augue, tincidunt eu nisi vitae, consectetur varius
            nibh. Nulla id ante ac augue pellentesque vestibulum sed eget neque.
          </p>
        </div>
        <div className='video-container'>
          <Video />
        </div>
      </div>
    );
  }
}

export default GamingLeague;
