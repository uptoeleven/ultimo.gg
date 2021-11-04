import React, { Component } from "react";

// css
import "../../style/Tournements/featuredTournament.scss";

// Icons

import Cup from "../../assets/homePage/torn-icon.svg";

class FeaturedTournament extends Component {
  openFeature = () => {
    // window.open("https://go.cmode.gg/UltimoGGSeries");
    window.open("https://www.challengermode.com/invite/9pDFLw");
  };

  render() {
    return (
      <div className='featured'>
        <div className='featured-content'>
          <img src={Cup} alt='tournament'></img>
          <h1>BATTLE OF THE BLUES</h1>
          <span className='date'>16th - 17th October 2021</span>
          <div className='featured-content-prize'>
            <div className='text'>
              <span className='prize-pool'>PRIZE POOL</span>
              <span className='prize'>£1750 Cash Prize</span>
            </div>
            <div onClick={this.openFeature} className='sign-up_button'></div>
          </div>
        </div>
        <div className='featured-image'></div>
      </div>
    );
  }
}

export default FeaturedTournament;
