import React, { useState } from "react";
import "./slider.css";
import genLoader from "./../assets/loader/music-gen-loader.gif";
import { generateNote } from "../helpers/tracks";
import Player from "./../components/general/Player.component";
export default function CreateNew({ user }) {
  const [slider, setslider] = useState(0);
  const [result, setresult] = useState({});
  const [loading, setloading] = useState(false);
  const generate = () => {
    setloading(true);
    generateNote(
      user,
      Number(slider),
      (data) => {
        setresult(data);
        setloading(false);
      },
      (err) => {}
    );
  };
  const reset = () => {
    setslider(0);
    setresult({});
  };
  const handleChange = (e) => {
    setslider(e.target.value);
  };
  return (
    <>
      <h2>Create a New Musical Note</h2>
      <div className='card p-2 w-75 m-auto'>
        <h5>Starting pitch</h5>
        <div className='slidecontainer'>
          <input
            type='range'
            min='1'
            max='85'
            value={slider}
            className='slider'
            id='myRange'
            onChange={handleChange}
          />
        </div>
        <div className='text-right'>
          <button className='btn btn-danger m-1' onClick={reset}>
            Reset
          </button>
          <button className='btn btn-success m-1' onClick={generate}>
            Generate
          </button>
        </div>
        {loading ? <img src={genLoader} className='w-75 m-auto' /> : ""}
        {result._id ? (
          <>
            <div className='card p-1'>
              <h5>{result.title}</h5>
              <pre>{result.musicStr}</pre>
            </div>
            <div className='card p-1'>
              <Player notation={result.musicStr} title={result.title} />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
