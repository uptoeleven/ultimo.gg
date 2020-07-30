import React, { Component } from "react";

import "../../style/SignUp/signUpSectionFrom.scss";

// Logo
import Logo from "../../assets/homePage/ultimoGGLogo.svg";

class SignUpPageForm extends Component {
  state = {};

  render() {
    return (
      <div className='sign-up_form'>
        <h1 className='title-block'>Sign up to join our global community</h1>
        <p className='text-block'>
          Sign up now to stay up to date with everything Ultimo GG and be the
          first to experience the Ultimo Amateur Gaming League
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
            <label>Phone Number</label>
            <input type='text'></input>
          </div>

          <div className='field-group_bottom'>
            <label>Country Of Residence</label>
            <input type='text'></input>
          </div>
          <div className='field-group_bottom'>
            <label>Age Range</label>
            <input type='text'></input>
          </div>
          <div className='field-group_bottom'>
            <label>Gamertag</label>
            <input type='text'></input>
          </div>
          <div className='field-group_bottom dropdown'>
            <label>Platform</label>
            <select name='platform' id='platform'>
              <option value='playstation'>PlayStation</option>
              <option value='xbox'>Xbox</option>
              <option value='pc'>PC</option>
              <option value='mobile'>Mobile</option>
            </select>
          </div>

          <div className='check-box'>
            <input type='checkbox'></input>
            <span className='checkbox_custom'></span>

            <label>I AM HAPPY FOR ULTIMO GG TO CONTACT ME</label>
          </div>

          <a href='https://discord.com/invite/e9p5YZE'>
            <div className='sign-up_button'></div>
          </a>
          <img className='logoGG' src={Logo} alt='UltimoGG' />
        </form>
      </div>
    );
  }
}

export default SignUpPageForm;
