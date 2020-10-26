import React, { useState } from "react";
import Routes from "./routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

import Sidebar from "react-sidebar";
import NavbarV from "./components/general/navbar.component";
import SidebarV from "./components/general/sidebar.component";
import FooterV from "./components/general/footer.component";

const mql = window.matchMedia(`(min-width: 800px)`);

function App() {
  const [dock, setdock] = useState(mql.matches);
  const [Sidebaropen, setSidebaropen] = useState(false);
  const [user, setuser] = useState({});
  const [Balance, setBalance] = useState(0);
  const [dp, setdp] = useState(0);
  const [loggedin, setloggedin] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebaropen(open);
  };

  const cleanuser = () => {
    setloggedin(false);
    setBalance(0);
    setuser({});
  };

  return (
    <Router>
      <Sidebar
        sidebar={
          <SidebarV
            control={onSetSidebarOpen}
            user={user}
            dp={dp}
            cleanuser={cleanuser}
            loggedin={loggedin}
          />
        }
        open={Sidebaropen}
        docked={dock}
        touch={true}
        onSetOpen={onSetSidebarOpen}>
        <NavbarV onSetSidebarOpen={onSetSidebarOpen} balance={Balance} />
        <div className='container p-3' style={{ marginBottom: "80px" }}>
          <Routes />
        </div>
      </Sidebar>
    </Router>
  );
}

export default App;
