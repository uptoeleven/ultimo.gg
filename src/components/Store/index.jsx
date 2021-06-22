import React, { Component } from "react";

import Footer from "../Footer/desktopFooter";
import Banner from "./Banner";
import Shop from "./shopSection";

class StorePage extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
