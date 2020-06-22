import React, { Component } from "react";

import Footer from "../Footer/desktopFooter";
import StoreCarosel from "./storeCarosel";
import Shop from "./shopSection";

class StorePage extends Component {
  state = {};
  render() {
    return (
      <>
        <StoreCarosel />
        <Shop />
        <Footer />
      </>
    );
  }
}

export default StorePage;
