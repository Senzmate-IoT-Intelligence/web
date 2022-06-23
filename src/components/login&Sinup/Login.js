import React, { useState } from "react";
import "./logstyle.css";
import Axios from "axios";

const Login = () => {
  const [roleKey, setRoleKey] = useState("");
  const [password, setPassword] = useState("");

  const signin = () => {
    console.log("Signin");
    var body = {
      email: roleKey,
      password: password,
    };

    console.log(body);
    Axios.post("/user/userlogin", body)
      .then((response) => {
        var Data = response.data;
        console.log("Response", response.data);
        window.localStorage.setItem("userName", Data.user.username);
        window.localStorage.setItem("userRole", Data.user.role);
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="forml">
      <div className="form-bodyl">
        <h2 style={{ textAlign: "center", color: "aliceblue" }}>HELLO </h2>
        <h3 style={{ textAlign: "center", color: "rgb(151, 150, 150)" }}>
          Please Enter Your Info
        </h3>

        <form className="newUserForml">
          <div className="newUserIteml">
            <label>Email</label>
            <input
              value={roleKey}
              type="text"
              placeholder="0001A"
              onChange={(e) => setRoleKey(e.target.value)}
            />
          </div>

          <div className="newUserIteml">
            <label> Password</label>
            <input
              value={password}
              type="text"
              placeholder="enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="newUserIteml">
            <button className="newUserButtonl" type="button" onClick={signin}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
