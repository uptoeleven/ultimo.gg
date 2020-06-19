import React, { Component } from "react";

// components
import SignUpSection from "./signUpSection";
import Footer from "../Footer/desktopFooter";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <>
        <SignUpSection />
        <Footer />
      </>
    );
  }
}

export default SignUp;
