import React,{useEffect,useState} from "react";
import { getAllTracks,getFavTracks } from "../helpers/tracks";
/**
 * flag = 0 => All Tracks Requested
 * flag = 1 => Only Fav Tracks Requested
 */
export default function AllTracks({flag}) {

    useEffect(() => {
        if(flag){

        }else{

        }
    }, [])

  return (
    <table className='table'>
      <thead className='thead-dark'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Title (Auto-Gen)</th>
          <th scope='col'>Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Larry</td>
          <td>the Bird</td>
        </tr>
      </tbody>
    </table>
  );
}
