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

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Senzmate_IOT</span>
        </div>
        <div className="button">
          <Stack spacing={2} direction="row">
            <Link to="/signup">
              <button className="Buttonin">SignUp</button>
            </Link>
            <Link to="/signin">
              <button className="Buttonup">SignIn</button>
            </Link>
            <button className="Buttonout" type="button" onClick={Logout}>
              Logout
            </button>
          </Stack>
        </div>
        <div className="topRight">
          <img
            src="https://thumbs.dreamstime.com/b/young-positive-handsome-business-man-official-costume-suit-tie-standing-smiling-over-light-grey-wall-background-stylish-170441179.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
