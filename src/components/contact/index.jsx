import React, { Component } from "react";

// components
import ContactBanner from "./contactUsBanner";
import ReachUs from "./reachUs";
import ContactForm from "./contactForm";
import SocialSection from "./socialChannels";
import Footer from "../Footer/desktopFooter";

class ContactPage extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <ContactBanner />
        <ReachUs />
        <ContactForm />
        <SocialSection />
        <Footer />
      </>
    );
  }
}

export default ContactPage;
