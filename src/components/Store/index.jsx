import React, { Component } from "react";

import Footer from "../Footer/desktopFooter";
import Banner from "./Banner";
import Shop from "./shopSection";

class StorePage extends Component {
  state = {};
  render() {
    return (
      <>
        <Banner />
        <Shop />

        <Footer />
      </>
    );
  }
}

export default StorePage;
