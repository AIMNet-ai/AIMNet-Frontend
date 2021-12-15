import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar.component";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const navbar = <p>Navbar</p>;
  ReactDOM.render(navbar, div);
});
