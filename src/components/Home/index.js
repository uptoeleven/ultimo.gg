import React, { Component } from "react";

// CSS
import "../../style/homePage/index.scss";

// Components
import HomeHero from "./homeHero";
import ItTakes from "./IttakesSection.jsx";
import ImageBanner from "./imageBannerSection";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <div className='Home'>
          <HomeHero />
          <ItTakes />
          <ImageBanner />
        </div>
      </>
    );
  }
}

export default HomePage;
