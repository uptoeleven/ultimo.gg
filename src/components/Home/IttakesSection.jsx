import React, { Component } from "react";

// css
import "../../style/homePage/signUpSection.scss";

// components
import VideoCompoent from "./videoComponent";

class ItTakesSection extends Component {
  state = {};
  render() {
    return (
      <div className='sign-up'>
        <div className='sign-up_content'>
          <div className='sign-up_content-video'>
            <VideoCompoent />
          </div>
          <div className='sign-up_content-form'>
            <script async src='https://eomail5.com/form/1a71a4a0-37f0-11ec-96e5-06b4694bee2a.js' data-form='1a71a4a0-37f0-11ec-96e5-06b4694bee2a'></script>
          </div>
        </div>
      </div>
    );
  }
}

export default ItTakesSection;
