import React, { Component } from "react";

// css
import "../../style/contactUs/contactForm.scss";

class ContactForm extends Component {
  state = {};
  render() {
    return (
      <div className='contact-form'>
        <h1 className='title-block'>FILL OUT A FORM</h1>
        <div className='form-container'>
          <form className='page-form'>
            <h1 className='title-block--mobile'>FILL OUT A FORM</h1>
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
              <textarea type='text-area'></textarea>
            </div>

            <div className='check-box'>
              <input type='checkbox'></input>
              <span className='checkbox_custom'></span>
              <label>I AM HAPPY FOR ULTIMO WARRIOR TO CONTACT ME</label>
            </div>
            <div className='mobile'>
              <div className='sign-up_button'></div>
            </div>
          </form>
          <div className='desktop'>
            <div className='sign-up_button'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
