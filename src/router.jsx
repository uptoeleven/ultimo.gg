import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import DesktopNav from "./components/Navigation/desktop_nav";
import HomePage from "./components/Home/index";
import SignUp from "./components/Signup/index";
import Tournament from "./components/Tournaments/index";
import Store from "./components/Store/index";
import VideoPage from "./components/VideoLib/index";
import BootcampPage from "./components/Bootcamp/index";
import ContactPage from "./components/contact/index";

function App() {
  return (
    <>
      <Router>
        <DesktopNav></DesktopNav>
        <div className='container'>
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

export default App;
