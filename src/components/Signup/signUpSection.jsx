import React, { Component } from "react";

// css
import "../../style/SignUp/signUpSection.scss";

// component

import SignUpPageForm from "./signUpPageForm";

class SignUpSection extends Component {
  state = {};
  render() {
    return (
      <div class='signUp-section'>
        <SignUpPageForm />
      </div>
    );
  }
}

export default SignUpSection;
