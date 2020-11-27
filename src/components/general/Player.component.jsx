import { Midi, Notation } from "react-abc";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const notationX = "CDEF GABc|";
const id = "a-random-id";

const Player = ({ notation, title }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <h2>ABC Player</h2>
      <h5>Title:{title}</h5>
      <hr />
      <Notation notation={notation} />
      <hr className='m-1' />
      <Midi notation={notation} />
      <hr className='m-1' />
    </>
  );
};
export default Player;
