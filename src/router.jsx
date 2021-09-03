import React, { Component } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import disableScroll from "disable-scroll";

// components
import DesktopNav from "./components/Navigation/desktop_nav";
import MobileNav from "./components/Navigation/mobile-navigation";
import HomePage from "./components/Home/index";
import SignUp from "./components/Signup/index";
import SignUpDev from "./components/SignUpdev/index";
import Tournament from "./components/Tournaments/index";
import Store from "./components/Store/index";
import VideoPage from "./components/VideoLib/index";
import BootcampPage from "./components/Bootcamp/index";
import ContactPage from "./components/contact/index";
import Sony from "./components/sony/index";

class App extends Component {
  state = {
    toggle: false,
    windowPos: 0,
  };

  componentDidUpdate() {
    this.scrollToMyRef();
  }
  windowPos = () => {
    let windowPos = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    return windowPos;
  };

  toggle = () => {
    // disableScroll.on();
    if (!this.state.toggle) {
      this.setState({
        toggle: true,
        windowPos: this.windowPos(),
      });
    } else {
      // disableScroll.off();
      this.setState({
        toggle: false,
      });
    }
  };

  scrollToMyRef = () => window.scrollTo(0, this.state.windowPos);
  render() {
    let fixContainer = this.state.toggle === true ? "fixed" : "";
    // this.state.toggle === false && this.scrollToMyRef();
    return (
      <>
        <BrowserRouter>
          <DesktopNav></DesktopNav>
          <MobileNav
            toggle={this.toggle}
            windowPos={this.state.windowPos}
            navState={this.state.toggle}
          />
          <div
            className='container'
            style={{
              position: fixContainer,
              top: `-${this.state.windowPos}px`,
            }}>
            <Switch>
              <Route exact path='/' component={HomePage}></Route>
              <Route exact path='/signup' component={SignUp}></Route>
              <Route exact path='/signupdev' component={SignUpDev}></Route>
              <Route exact path='/tournaments' component={Tournament}></Route>
              <Route exact path='/store' component={Store}></Route>
              <Route exact path='/VideoLibrary' component={VideoPage}></Route>
              <Route exact path='/Bootcamp' component={BootcampPage}></Route>
              <Route exact path='/ContactUs' component={ContactPage}></Route>
              <Route exact path='/Sony' component={Sony}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
