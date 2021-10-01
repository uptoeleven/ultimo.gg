import React, { Component } from "react";

// components
import FeaturedTournament from "./featuredTournament";
import Tournaments from "./tournaments";
import ImageBanner from "./imageBanner";
import IsolationSeries from "../Home/isolationSeries";
import IsolationContent from "../Home/isolationSeriesContent";
import Footer from "../Footer/desktopFooter";

class TournamentPage extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <FeaturedTournament />
        <Tournaments />

        <IsolationSeries />
        <IsolationContent />
        <Footer />
      </>
    );
  }
}

export default TournamentPage;
