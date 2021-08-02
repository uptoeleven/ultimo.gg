import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// css
import "../../style/homePage/signUpFrom.scss";
class SignUpForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    country: "",
    check: false,
    formHit: false,
    formResponse: "",
    captureValue: "",
  };

  onHandleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (this.state.emailAddress.includes("@")) {
      console.log(this.state.emailAddress.split("@").length);
    }
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
    let phoneNumber = this.state.phoneNumber;

    if (this.state.phoneNumber.length === 0) {
      phoneNumber = 0;
    }
    if (this.state.captureValue.length !== 0) {
      await fetch(
        `https://ultimo-mailchimp-api.herokuapp.com/userPost/${this.state.firstName}/${this.state.lastName}/${this.state.emailAddress}/${phoneNumber}/${this.state.country}`
      )
        .then((response) => response.text())
        .then(
          function (result) {
            console.log(result);
            if (result.includes("{")) {
              this.setState({
                formResponse: "You have already signed up for Ultimo GG",
              });
            } else {
              if (result.status_code === 404) {
                this.setState({
                  formResponse: "invalid request",
                });
              } else {
                this.setState({
                  formResponse: "You have signed up for Ultimo GG",
                });
              }
            }

            this.setState({
              formHit: true,
              firstName: "",
              lastName: "",
              emailAddress: "",
              country: "",
              phoneNumber: "",
              check: false,
            });
          }.bind(this)
        )

        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  isValid = (str) => {
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
  };

  isNum = (str) => {
    return /^\d+$/.test(str);
  };

  recapture = (value) => {
    this.setState({
      captureValue: value,
    });
  };

  render() {
    let disableButton =
      this.state.emailAddress !== "" &&
      this.state.firstName !== "" &&
      this.isValid(this.state.firstName) === true &&
      this.isValid(this.state.lastName) === true &&
      this.isValid(this.state.country) === true &&
      this.isValid(this.state.emailAddress) === true &&
      this.isValid(this.state.phoneNumber) === true &&
      this.state.captureValue.length !== 0 &&
      this.state.lastName &&
      this.state.country !== "" &&
      this.state.emailAddress.includes("@") &&
      this.state.check &&
      this.state.emailAddress.split("@").length < 3
        ? "submit-button "
        : "submit-button button-disable";

    let hasSubmit = this.state.formHit
      ? "sign-up-resp resp-show"
      : "sign-up-resp";
    console.log(this.state.captureValue.length);
    return (
      <>
        <form className='SignUpform'>
          <div className='border'></div>
          <h1 className='title-block-mobile'>
            Register <u>today</u>
          </h1>
          <div className='field'>
            <label>First Name*</label>
            <input
              type='text'
              name='firstName'
              onChange={this.onHandleInput}
              value={this.state.firstName}
            ></input>
          </div>
          <div className='field'>
            <label>Last Name*</label>
            <input
              type='text'
              name='lastName'
              onChange={this.onHandleInput}
              value={this.state.lastName}
            ></input>
          </div>

          <div className='field'>
            <label>Phone Number (optional)</label>
            <input
              type='tel'
              name='phoneNumber'
              onChange={this.onHandleInput}
              value={this.state.phoneNumber}
            ></input>
          </div>
          <div className='field'>
            <label>Country*</label>
            <input
              type='text'
              name='country'
              onChange={this.onHandleInput}
              value={this.state.country}
            ></input>
          </div>
          <div className='field email'>
            <label>Email Address*</label>
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
              checked={this.state.check || false}
            ></input>
            <span className='checkbox_custom'></span>

            <label>I AM HAPPY FOR ULTIMO GG TO CONTACT ME</label>
          </div>
          <div className='submit-button--mobile'>
            <span className='sign-up_button'></span>
          </div>
          <p className={hasSubmit}>{this.state.formResponse}</p>
          <div
            style={{
              position: "relative",
              zIndex: "1000",
              margin: "0 auto",
              paddingTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ReCAPTCHA
              sitekey='6Lfw0dUbAAAAAG6RBSr6bTrvVQq4COn7a7PflcJ-'
              onChange={this.recapture}
            />
          </div>
        </form>

        <div className={disableButton} onClick={this.submitForm}>
          <span className='sign-up_button'></span>
        </div>
      </>
    );
  }
}

export default SignUpForm;
