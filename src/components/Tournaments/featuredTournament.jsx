import React, { Component } from "react";

// css
import "../../style/Tournements/featuredTournament.scss";

// Icons

import Cup from "../../assets/homePage/torn-icon.svg";

class FeaturedTournament extends Component {
  render() {
    return (
      <div className='featured'>
        <div className='featured-content'>
          <img src={Cup} alt='tournament'></img>
          <h1>FEATURED TOURNAMENT</h1>
          <span className='date'>02/05/2020</span>
          <div className='featured-content-prize'>
            <div className='text'>
              <span className='prize-pool'>PRIZE POOL</span>
              <span className='prize'>$1000</span>
            </div>
            <div className='sign-up_button'></div>
          </div>
        </div>
        <div className='featured-image'> </div>
      </div>
    );
  }
}

export default FeaturedTournament;
