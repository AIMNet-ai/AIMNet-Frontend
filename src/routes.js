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

import AllTracks from "./pages/alltracks.page";
import CreateNew from "./pages/createNew.page";
import Player from "./components/general/Player.component";

function Routes({ loggedin, setuser, setloggedin, user }) {
  const [music, setmusic] = useState({
    title: "Default title",
    notation: "CDEF GABc|",
  });
  return (
    <Switch>
      <Route path='/new'>
        {loggedin ? (
          <CreateNew user={user} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path='/favorites'>
        {loggedin ? (
          <AllTracks flag={1} user={user} setmusic={setmusic} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
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
          <ProfileV user={user} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path='/test'>
        {loggedin ? (
          <Player user={user} notation={music.notation} title={music.title} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path='/*'>
        {loggedin ? (
          <AllTracks user={user} setmusic={setmusic} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
    </Switch>
  );
}

export default Routes;
