import React, { useState } from "react";
import "./logstyle.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [roleKey, setRoleKey] = useState("");
  const [password, setPassword] = useState("");

  let data = null;

  const signin = () => {
    console.log("Signin");
    var body = {
      email: roleKey,
      password: password,
    };

    console.log(body);
    Axios.post("/user/userlogin", body)
      .then((res) => {
        console.log(res);
        var Data = res.data;

        console.log(JSON.stringify(res));
        alert(res.data.message);
        if (res.data.message == "Login success!") {
          window.localStorage.setItem("userName", Data.user.username);
          window.localStorage.setItem("userRole", Data.user.role);
          window.localStorage.setItem("id", Data.user._id);
          window.localStorage.setItem("token", Data.token);

          setTimeout(() => {
            navigate("/profile");
            window.location.reload();
          }, 1500);
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
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
              placeholder="Your email here"
              onChange={(e) => setRoleKey(e.target.value)}
            />
          </div>

          <div className="newUserIteml">
            <label> Password</label>
            <input
              value={password}
              type="password"
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
