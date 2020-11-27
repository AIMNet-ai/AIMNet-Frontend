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
import Abcjs from "react-abcjs";
import Player from "./player/player";
import ReactABCPlayer from "./player/react-abc-player";

import AllTracks from "./pages/alltracks.page";

function Routes({ loggedin, setuser, setloggedin }) {
  return (
    <Switch>
      <Route path='/new'>
        {loggedin ? (
          "New Track"
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path='/favorites'>
        {loggedin ? (
          "favorites Track"
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path='/player'>
        <Player />
      </Route>
      <Route path='/player2'>
        <ReactABCPlayer />
      </Route>
      <Route path='/login'>
        {loggedin ? (
          "Dashboard"
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path='/signup'>
        {loggedin ? (
          "Dashboard"
        ) : (
          <SignupV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path='/profile'>
        {loggedin ? (
          <ProfileV />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path='/'>
        {loggedin ? (
          <AllTracks />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
    </Switch>
  );
}

export default Routes;
