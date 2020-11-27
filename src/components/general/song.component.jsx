import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const sucessAlert = () => "";

export default function SongComponent({ data, index, setmusic }) {
  const [redirector, setredirector] = useState(false);
  const [liked, setliked] = useState(data.favorite);
  const [success, setsuccess] = useState(false);
  const play = () => {
    setmusic({ title: data.title, notation: data.musicStr });
    setredirector(true);
  };

  const toggleLike = () => {
    axios
      .post(`http://127.0.0.1:5000/api/toggletracks`, {
        email: data.email,
        _id: data._id,
      })
      .then((d) => {
        console.log(d.data);
        setliked(!liked);
        setsuccess(true);
      });
  };
  //To Stop displaying the popup after 3 sec
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setsuccess(false);
      }, 3000);
    }
  }, [success]);

  return (
    <tr>
      {success && sucessAlert()}
      <th scope='row'>{index + 1}</th>
      <td>{data.title}</td>
      <td>{data.musicStr}</td>
      <td>
        <button className='btn btn-info m-1' onClick={play}>
          <i class='fas fa-play' style={{ fontSize: "25px" }}></i>
        </button>
        <button className='btn btn-info m-1' onClick={toggleLike}>
          {!liked ? (
            <i
              class='far fa-heart'
              style={{ fontSize: "25px", color: "red" }}></i>
          ) : (
            <i
              class='fas fa-heart'
              style={{ fontSize: "25px", color: "red" }}></i>
          )}
        </button>
      </td>
      {redirector ? <Redirect to='/test' /> : ""}
    </tr>
  );
}
