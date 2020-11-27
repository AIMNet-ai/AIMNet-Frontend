import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllTracks, getFavTracks } from "../helpers/tracks";
import empty from "../assets/loader/empty.png";
import songLoader from "../assets/loader/singing-bunny.gif";
import SongComponent from "../components/general/song.component";
/**
 * flag = 0 => All Tracks Requested
 * flag = 1 => Only Fav Tracks Requested
 */
export default function AllTracks({ flag, user, setmusic }) {
  const [songStore, setsongStore] = useState([]);
  const [loading, setloading] = useState(true);
  let loc = useLocation();
  useEffect(() => {
    if (flag) {
      getFavTracks(
        user,
        (data) => {
          setsongStore(data);
          setloading(false);
        },
        (err) => {}
      );
    } else {
      getAllTracks(
        user,
        (data) => {
          setsongStore(data);
          setloading(false);
        },
        (err) => {}
      );
    }
  }, [loc]);

  return (
    <>
      <h2>{flag ? "Favorite Tracks" : "All Tracks"}</h2>
      {!loading ? (
        <>
          {songStore.length === 0 ? (
            <img src={empty} className='w-75 m-auto' />
          ) : (
            <table className='table'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Title {`(Auto-Gen)`}</th>
                  <th scope='col'>Lyrics</th>
                  <th scope='col'>Controls</th>
                </tr>
              </thead>
              <tbody>
                {songStore.map((el, index) => (
                  <SongComponent
                    data={el}
                    index={index}
                    key={index}
                    setmusic={setmusic}
                  />
                ))}
              </tbody>
            </table>
          )}
        </>
      ) : (
        <img src={songLoader} className='w-75 m-auto' />
      )}
    </>
  );
}
