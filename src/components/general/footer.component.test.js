import React from "react";
import ReactDOM from "react-dom";
import Footer from "./footer.component";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const footer = <p>Footer</p>
  ReactDOM.render(footer, div);
});
