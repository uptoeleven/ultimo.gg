import React, { Component } from "react";

// css
import "../../style/homePage/signUpFrom.scss";
class SignUpForm extends Component {
  state = {};
  render() {
    return (
      <>
        <form className='SignUpform'>
          <h1 className='title-block-mobile'>
            Register <u>today</u>
          </h1>
          <div className='field'>
            <label>First Name</label>
            <input type='text'></input>
          </div>
          <div className='field'>
            <label>Last Name</label>
            <input type='text'></input>
          </div>
          <div className='field'>
            <label>Email Address</label>
            <input type='text'></input>
          </div>
          <div className='field'>
            <label>country of residence</label>
            <input type='text'></input>
          </div>
          <div className='check-box'>
            <input type='checkbox'></input>
            <span className='checkbox_custom'></span>

            <label>I AM HAPPY FOR ULTIMO WARRIOR TO CONTACT ME</label>
          </div>
        </form>
        <div className='submit-button'>
          <span className='sign-up_button'></span>
        </div>
      </>
    );
  }
}

export default SignUpForm;
