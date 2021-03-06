import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { imgArr } from "./../../data/userimages";
import { FBlogout } from "./../../helpers/user";
import { Button } from "react-bootstrap";
import "./sidebar.style.css";
const IconStyling = {
  fontSize: "25px",
  margin: "0 5px",
};
export default function SidebarV({ control, cleanuser, user, loggedin, dp }) {
  const logout = () => {
    FBlogout(
      () => {
        //Sucess Function
        //console.log("Log Out Successful");
        cleanuser();
      },
      () => {
        //Error Function
        console.log("Error Occured");
      }
    );
  };
  return (
    <div
      className='card'
      style={{ width: "250px", background: "white", height: "100vh" }}>
      <div className='card-body'>
        {loggedin ? (
          <Fragment>
            <img
              className='card-img-top'
              src={imgArr[parseInt(dp)]}
              alt='Card cap'
              id={user.uid}
              style={{
                borderRadius: "50%",
                width: "60%",
                margin: "3vh 19%",
              }}
            />
            <p
              className='card-title d-flex justify-content-center'
              style={{ fontWeight: "bold" }}>
              {user.email}
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <Link
              to='/signup'
              onClick={() => control(false)}
              className='btn btn-warning m-1'>
              Sign Up
            </Link>
            <Link
              to='/login'
              onClick={() => control(false)}
              className='btn btn-success m-1'>
              Log In
            </Link>
          </Fragment>
        )}
        <hr />
        <div className='card-text'>
          <ul className='list-group list-group-flush'>
            <Link
              to='/new'
              className='list-group-item'
              onClick={() => control(false)}>
              <i className='fa fa-plus-circle' style={IconStyling}></i>
              Create New Track
            </Link>
            <Link
              to='/app'
              className='list-group-item'
              onClick={() => control(false)}>
              <i className='fa fa-music' style={IconStyling}></i>
              All Tracks
            </Link>
            <Link
              to='/favorites'
              className='list-group-item'
              onClick={() => control(false)}>
              <i className='fa fa-heartbeat' style={IconStyling}></i>
              Favorites
            </Link>
            <Link
              to='/profile'
              className='list-group-item'
              onClick={() => control(false)}>
              <i className='fa fa-user' style={IconStyling}></i>
              Profile
            </Link>
          </ul>
        </div>
        <hr />
        {loggedin ? (
          <Button
            onClick={logout}
            className='btn btn-outline-danger text-danger w-75 m-auto bg-white d-flex justify-content-center'>
            Log out
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
