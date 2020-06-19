import React, { Component } from "react";

import "../../style/SignUp/signUpSectionFrom.scss";

class SignUpPageForm extends Component {
  state = {};
  render() {
    return (
      <div className='sign-up_form'>
        <h1 className='title-block'>JOIN OUR GLOBAL AMATEUR GAMING LEAGUE</h1>
        <p className='text-block'>
          Sign up now to secure your place as part of the closed beta test
          coming soon and be one of the first to experience the global amateur
          gaming league!
        </p>

        <form className='page-form'>
          <div className='field-group_top'>
            <label>First Name</label>
            <input type='text'></input>
          </div>
          <div className='field-group_top'>
            <label>Last Name</label>
            <input type='text'></input>
          </div>
          <div className='field-group_top'>
            <label>Email Address</label>
            <input type='text'></input>
          </div>
          <div className='field-group_top'>
            <label>Country Of Residence</label>
            <input type='text'></input>
          </div>

          <div className='field-group_bottom'>
            <label>Country Of Residence</label>
            <input type='text'></input>
          </div>
          <div className='field-group_bottom'>
            <label>Country Of Residence</label>
            <input type='text'></input>
          </div>
          <div className='field-group_bottom'>
            <label>Country Of Residence</label>
            <input type='text'></input>
          </div>

          <div className='checkbox'>
            <input type='checkbox' />
            <label>IM HAPPY FOR ULTIMO WARRIOR TO CONTACT ME</label>
          </div>

          <div className='sign-up_button'></div>
        </form>
      </div>
    );
  }
}

export default SignUpPageForm;
