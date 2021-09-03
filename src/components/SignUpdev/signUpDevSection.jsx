import React, { Component } from "react";

// css
import "../../style/SignUp/signUpSection.scss";

// component

import SignUpPageForm from "./signUpDevPageForm";

class SignUpDevSection extends Component {
  state = {};
  render() {
    return (
      <div className='signUp-section'>
        <SignUpPageForm />
      </div>
    );
  }
}

export default SignUpDevSection;
