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

            <div className='checkbox'>
              <input type='checkbox' />
              <label>IM HAPPY FOR ULTIMO WARRIOR TO CONTACT ME</label>
            </div>
          </form>
          <div className='sign-up_button'></div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
