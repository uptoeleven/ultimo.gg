import React, { Component } from "react";

// components
import FeaturedTournament from "./featuredTournament";
import Tornaments from "./tornaments";
import ImageBanner from "./imageBanner";
import IsolationSeries from "../Home/isolationSeries";
import IsolationContent from "../Home/isolationSeriesContent";
import Footer from "../Footer/desktopFooter";

class TournamentPage extends Component {
  state = {};
  render() {
    return (
      <>
        <FeaturedTournament />
        <Tornaments />
        <ImageBanner />
        <IsolationSeries />
        <IsolationContent />
        <Footer />
      </>
    );
  }
}

export default TournamentPage;
