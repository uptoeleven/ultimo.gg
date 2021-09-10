import React, { Component } from "react";

// components
import SignUpDevSection from "./signUpDevSection";
import Footer from "../Footer/desktopFooter";

class SignUp extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <SignUpDevSection />
        <Footer />
      </>
    );
  }
}

export default SignUp;
