import React, { Component } from "react";

// css
import "../../style/homePage/signUpSection.scss";

// components
import VideoCompoent from "./videoComponent";
import SignUpForm from "./signUpForm.jsx";

class ItTakesSection extends Component {
  state = {};
  render() {
    return (
      <div className='sign-up'>
        <h2 className='sign-up_title-block'>
          THE GAME-CHANGING ESPORTS PLATFORM
        </h2>
        <div className='sign-up_content'>
          <div className='sign-up_content-video'>
            <VideoCompoent />
          </div>
          <div className='sign-up_content-form'>
            <SignUpForm />
          </div>
        </div>
      </div>
    );
  }
}

export default ItTakesSection;
