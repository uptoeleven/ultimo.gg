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
            <iframe src="https://ultgg-io.eo.page/dd4zz" width="600" height="400"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default ItTakesSection;
