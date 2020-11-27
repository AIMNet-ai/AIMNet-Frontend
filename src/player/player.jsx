import React from "react";

function Player() {
  return (
    <>
      <textarea name='abc' id='abc' cols='80' rows='15'>
        {`
        X: 1 T: Cooley's M: 4/4 L: 1/8 R: reel K: Emin |:D2|EB{c}BA B2 EB|~B2 AB
        dBAG|FDAD BDAD|FDAD dAFD| EBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:|
        |:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg| eB B2 eBgB|eB B2
        defg|afe^c dBAF|DEFD E2:|
          `}
      </textarea>
      <hr />
      <div id='audio'></div>
      <div id='warnings'></div>
      <div id='paper0' class='paper'></div>
      <div id='paper1' class='paper'></div>
      <div id='paper2' class='paper'></div>
      <div id='paper3' class='paper'></div>
      <div id='selection'></div>
    </>
  );
}

export default Player;
