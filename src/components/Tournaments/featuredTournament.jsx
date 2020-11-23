import React, { Component } from "react";

// css
import "../../style/Tournements/featuredTournament.scss";

// Icons

import Cup from "../../assets/homePage/torn-icon.svg";

class FeaturedTournament extends Component {
  openFeature = () => {
    window.open("https://www.challengermode.com/s/TheWeekendClash");
  };

  render() {
    return (
      <div className='featured'>
        <div className='featured-content'>
          <img src={Cup} alt='tournament'></img>
          <h1>FEATURED TOURNAMENT</h1>
          <span className='date'>14th - 15th November</span>
          <div className='featured-content-prize'>
            <div className='text'>
              <span className='prize-pool'>PRIZE POOL</span>
              <span className='prize'>AFCB Signed Shirt</span>
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
