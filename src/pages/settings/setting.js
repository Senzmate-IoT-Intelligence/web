import "./setting.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Settings() {
  const [password, setPassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const token = window.localStorage.getItem("token");
  const ID = window.localStorage.getItem("id");

  const postData = () => {
    const data = {
      id: ID,
      password: password,
      newpassword: newpassword,
      confirmpassword: confirmpassword,
      token: token,
    };
    console.log(data);
    Axios.post("/user/profilesetting", data).then((res) => console.log(res));
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Update Password </h1>
      </div>
      <div className="forms">
        <form className="newUserForms">
          <div className="newUserItems">
            <label>Current Password</label>
            <input
              type="text"
              value={password}
              placeholder="enter your current password here"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="newUserItems">
            <label>New Password</label>
            <input
              type="text"
              value={newpassword}
              placeholder="enter your new password here"
              onChange={(e) => setnewpassword(e.target.value)}
            />
          </div>
          <div className="newUserItems">
            <label>Comfirm Password</label>
            <input
              type="text"
              value={confirmpassword}
              placeholder="again comfirm your password"
              onChange={(e) => setconfirmpassword(e.target.value)}
            />
          </div>

          <div className="newUserItems">
            <button className="newUserButtones" onClick={postData}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
