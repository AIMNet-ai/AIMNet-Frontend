import React from "react";
import { Editor } from "react-abc";

const notation = "CDEF GABc|";

const id = "a-random-id";
const ReactABCPlayer = ({ notation }) => (
  <div>
    <textarea defaultValue={notation} id={id} />
    <Editor editArea={id} />
  </div>
);

export default ReactABCPlayer;
