import React, { Component } from "react";

// css
import "../../style/homePage/signUpFrom.scss";
class SignUpForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    check: false,
    signedUp: false,
  };

  onHandleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  changeCheck = () => {
    if (this.state.check === false) {
      this.setState({
        check: true,
      });
    } else {
      this.setState({
        check: false,
      });
    }
  };
  submitForm = async () => {
    await fetch(
      `https://ultimo-mailchimp-api.herokuapp.com/${this.state.firstName}/${this.state.lastName}/${this.state.emailAddress}`
    )
      .then((response) => response.text())
      .then((result) =>
        this.setState({
          signedUp: true,
          firstName: "",
          lastName: "",
          emailAddress: "",
        })
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    let disableButton =
      this.state.emailAddress !== "" &&
      this.state.firstName !== "" &&
      this.state.lastName &&
      this.state.emailAddress.includes("@") &&
      this.state.check
        ? "submit-button "
        : "submit-button button-disable";

    let hasSubmit = this.state.signedUp
      ? "sign-up-resp resp-show"
      : "sign-up-resp";
    return (
      <>
        <form className='SignUpform'>
          <div className='border'></div>
          <h1 className='title-block-mobile'>
            Register <u>today</u>
          </h1>
          <div className='field'>
            <label>First Name</label>
            <input
              type='text'
              name='firstName'
              onChange={this.onHandleInput}
              value={this.state.firstName}
            ></input>
          </div>
          <div className='field'>
            <label>Last Name</label>
            <input
              type='text'
              name='lastName'
              onChange={this.onHandleInput}
              value={this.state.lastName}
            ></input>
          </div>
          <div className='field email'>
            <label>Email Address</label>
            <input
              type='text'
              name='emailAddress'
              onChange={this.onHandleInput}
              value={this.state.emailAddress}
            ></input>
          </div>

          <div className='check-box'>
            <input
              type='checkbox'
              name='check'
              onClick={this.changeCheck}
            ></input>
            <span className='checkbox_custom'></span>

            <label>I AM HAPPY FOR ULTIMO GG TO CONTACT ME</label>
          </div>
          <div className='submit-button--mobile'>
            <span className='sign-up_button'></span>
          </div>
          <p className={hasSubmit}>You have signed up for Ultimo GG</p>
        </form>

        <div className={disableButton} onClick={this.submitForm}>
          <span className='sign-up_button'></span>
        </div>
      </>
    );
  }
}

export default SignUpForm;
