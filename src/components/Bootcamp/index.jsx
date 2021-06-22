import React, { Component } from "react";

import CommingSoon from "./commingSoon";
import Footer from "../Footer/desktopFooter";

class BootcampPage extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <CommingSoon />
        <Footer />
      </>
    );
  }
}

export default BootcampPage;
