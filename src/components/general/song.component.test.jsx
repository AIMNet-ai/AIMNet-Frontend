import React from "react";
import ReactDOM from "react-dom";
import SongComponent from "./song.component";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const el = <p>SongComponent</p>;
  ReactDOM.render(el, div);
});
