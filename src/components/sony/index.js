import React, { Component } from "react";

// componenets
import HomeHero from "./homeHero";
import ImageBanner from "./imageBanner.jsx";
import VideoSection from "./videoSection";
import Xperia from "./xperia-cod";
import PhoneInfo from "./phoneInfo";
import PhoneDetails from "./phoneDetails";
import XperiaDisplay from "./xperiaDisplay";
class SonyPage extends Component {
  state = {};
  render() {
    return (
      <>
        <HomeHero />

        <VideoSection />
        <Xperia />
        <PhoneInfo />
        <PhoneDetails />
        <XperiaDisplay />
      </>
    );
  }
}

export default SonyPage;
