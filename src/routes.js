import React, { useState, useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import LoginV from "./pages/login.page";
import SignupV from "./pages/signup.page";
import ProfileV from "./pages/profile.page";

function Routes() {
  return (
    <Switch>
      <Route path='/dashboard'>This is dashboard</Route>
      <Route path='/new'>New Track</Route>
      <Route path='/favorites'>favorites Track</Route>
      <Route path='/login'>
        <LoginV />
      </Route>
      <Route path='/signup'>
        <SignupV />
      </Route>
      <Route path='/profile'>
        <ProfileV />
      </Route>
      <Route path='/'>Root line</Route>
    </Switch>
  );
}

export default Routes;
