import React, { Component } from "react";

// css
import "../../style/SignUp/signUpSection.scss";

// component

import SignUpDevPageForm from "./signUpDevPageForm";

class SignUpDevSection extends Component {
  state = {};
  render() {
    return (
      <div className='signUp-section'>
        <SignUpDevPageForm />
      </div>
    );
  }
}

export default SignUpDevSection;
