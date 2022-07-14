import {
  CalendarToday,
  EmailOutlined,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./profil.css";

import Axios from "axios";

export default function Profile() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const token = window.localStorage.getItem("token");
  const id = window.localStorage.getItem("id");

  const [user, setUser] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const postData = () => {
    const data = {
      role: role,
      name: name,
      email: email,
      token: token,
      id: id,
    };
    console.log(data);
    Axios.post("/user/profile", data).then((res) => console.log(res));
  };

  const getData = () => {
    Axios.get(`http://localhost:5000/api/user/show/${id}`)
      .then((res) => {
        setUser(res.data.response);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">HELLO! {user.username}</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://thumbs.dreamstime.com/b/icon-profile-circle-shadow-color-dark-blue-background-color-white-icon-profile-circle-shadow-color-dark-blue-194699287.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Saman Perera</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>

            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.role}</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>

            <div className="userShowInfo">
              <EmailOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Update Profile</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Role</label>
                <input
                  type="text"
                  placeholder="Admin"
                  className="userUpdateInput"
                  value={user.role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="yourname"
                  className="userUpdateInput"
                  //value={employee.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="sgshsbsh@gmail.com"
                  className="userUpdateInput"
                  //value={employee.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://thumbs.dreamstime.com/b/icon-profile-circle-shadow-color-dark-blue-background-color-white-icon-profile-circle-shadow-color-dark-blue-194699287.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" onClick={postData}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
