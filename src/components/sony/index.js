import React, { Component } from "react";

// componenets
import HomeHero from "./homeHero";
import ImageBanner from "./imageBanner.jsx";
import VideoSection from "./videoSection";
import Xperia from "./xperia-cod";
import PhoneInfo from "./phoneInfo";
class SonyPage extends Component {
  state = {};
  render() {
    return (
      <>
        <HomeHero />
        <ImageBanner />
        <VideoSection />
        <Xperia />
        <PhoneInfo />
      </>
    );
  }
}

export default SonyPage;
