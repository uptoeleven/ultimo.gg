import React, { Component } from "react";

// CSS
import "../../style/homePage/index.scss";

// Components
import HomeHero from "./homeHero";
import ItTakes from "./IttakesSection.jsx";

import PlatformSection from "./platformSection";
import InfoSection from "./infoSection";
import IsolationSeries from "./isolationSeries";
import IsolationContent from "./isolationSeriesContent";

import GamingLeague from "./gamingLeague";
import TournamentSection from "./tournamentSection";

import Footer from "../Footer/desktopFooter";

class HomePage extends Component {
  state = {};
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <div className='Home'>
          <HomeHero />
          <ItTakes />

          <PlatformSection />
          <InfoSection />
          <IsolationSeries />
          <IsolationContent />

          <GamingLeague />
          <TournamentSection />
          <Footer />
        </div>
      </>
    );
  }
}

export default HomePage;
