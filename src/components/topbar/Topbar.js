import React from "react";
import "./topbar.css";

import Stack from "@mui/material/Stack";

import { Link, useNavigate } from "react-router-dom";

export default function Topbar() {
  const userName = window.localStorage.getItem("userName");
  const navigate = useNavigate();

  const Logout = () => {
    console.log("Logout");
    window.localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/">
            <span className="logo">Senzmate_IOT</span>
          </Link>
        </div>
        <div className="button">
          <Stack spacing={1} direction="row">
            {/* <Link to="/useridval">
              <button className="Buttonin">Add Id</button>
            </Link> */}

            {userName == undefined && (
              <Link to="/useridval">
                <button className="Buttonin">SignUp</button>
              </Link>
            )}

            {userName == undefined && (
              <Link to="/signin">
                <button className="Buttonup">SignIn</button>
              </Link>
            )}

            {userName != undefined && (
              <button className="Buttonout" type="button" onClick={Logout}>
                Logout
              </button>
            )}
          </Stack>
        </div>
        <div className="topRight">
          {userName != undefined && (
            <img
              src="https://thumbs.dreamstime.com/b/icon-profile-circle-shadow-color-dark-blue-background-color-white-icon-profile-circle-shadow-color-dark-blue-194699287.jpg"
              alt=""
              className="topAvatar"
            />
          )}
        </div>
      </div>
    </div>
  );
}
