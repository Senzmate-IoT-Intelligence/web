import React from "react";
import "./topbar.css";

import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";

export default function Topbar() {
  const Logout = () => {
    console.log("Logout");
    window.location.reload();
    window.localStorage.clear();
  };

  const token = window.localStorage.getItem("token");

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Senzmate_IOT</span>
        </div>
        <div className="button">
          <Stack spacing={2} direction="row">
            {!token ? (
              <Link to="/signup">
                <button className="Buttonin">SignUp</button>
              </Link>
            ) : null}
            {!token ? (
              <Link to="/signin">
                <button className="Buttonup">SignIn</button>
              </Link>
            ) : null}
            {token ? (
              <button className="Buttonout" type="button" onClick={Logout}>
                Logout
              </button>
            ) : null}
          </Stack>
        </div>
        <div className="topRight">
          <img
            src="https://thumbs.dreamstime.com/b/icon-profile-circle-shadow-color-dark-blue-background-color-white-icon-profile-circle-shadow-color-dark-blue-194699287.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
