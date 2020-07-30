import React, { Component } from "react";
import { Link } from "react-router-dom";

// css
import "../../style/Bootcamp/comingSoon.scss";

import Bootcamp from "../../assets/bootcamp/Bootcamp.svg";

class ComingSoon extends Component {
  state = {};
  render() {
    return (
      <div className='comingSoon'>
        <div className='background-one'></div>
        <div className='background-two'></div>
        <div className='comingSoon-container'>
          <img src={Bootcamp} alt='bootcamp'></img>
          <h1>COMING SOON</h1>
          <p>
            Listen up, recruit. Our bootcamps are opening soon and will make you
            the warrior you were born to be. Improve your gaming skills with our
            player and coach-led bootcamps and training sessions. Want to be an
            esports star? <Link to='/signUp'>Sign up now.</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default ComingSoon;
