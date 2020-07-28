import React, { Component } from "react";

import Footer from "../Footer/desktopFooter";
import Banner from "./Banner";
import Shop from "./shopSection";

import TeeBanner from "../../assets/shop/ultimoteebanner.png";
import BFGBanner from "../../assets/shop/BFGBanner.png";
import UlitoTBanner from "../../assets/shop/ultimotbanner.png";

class StorePage extends Component {
  state = {};
  render() {
    return (
      <>
        <Banner img={TeeBanner} />
        <Shop />
        <Banner img={BFGBanner} />
        <Shop />
        <Banner img={UlitoTBanner} />
        <Footer />
      </>
    );
  }
}

export default StorePage;
