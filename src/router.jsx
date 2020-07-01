import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import DesktopNav from "./components/Navigation/desktop_nav";
import MobileNav from "./components/Navigation/mobile-navigation";
import HomePage from "./components/Home/index";
import SignUp from "./components/Signup/index";
import Tournament from "./components/Tournaments/index";
import Store from "./components/Store/index";
import VideoPage from "./components/VideoLib/index";
import BootcampPage from "./components/Bootcamp/index";
import ContactPage from "./components/contact/index";

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
    console.log(this.windowPos());
    if (!this.state.toggle) {
      this.setState({
        toggle: true,
        windowPos: this.windowPos(),
      });
    } else {
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
        <Router>
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
              <Route exact path='/signUp' component={SignUp}></Route>
              <Route exact path='/tournaments' component={Tournament}></Route>
              <Route exact path='/store' component={Store}></Route>
              <Route exact path='/VideoLibary' component={VideoPage}></Route>
              <Route exact path='/Bootcamp' component={BootcampPage}></Route>
              <Route exact path='/ContactUs' component={ContactPage}></Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
