import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import DesktopNav from "./components/Navigation/desktop_nav";
import HomePage from "./components/Home/index";
import SignUp from "./components/Signup/index";
import Tournament from "./components/Tournaments/index";

function App() {
  return (
    <>
      <Router>
        <DesktopNav></DesktopNav>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/signUp' component={SignUp}></Route>
            <Route exact path='/tornaments' component={Tournament}></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
