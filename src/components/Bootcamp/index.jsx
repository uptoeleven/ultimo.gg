import React, { Component } from "react";

import CommingSoon from "./commingSoon";
import Footer from "../Footer/desktopFooter";

class BootcampPage extends Component {
  state = {};
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
