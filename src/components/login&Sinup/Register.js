import React, { useEffect, useState } from "react";
import "./regstyle.css";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [roleKey, setRoleKey] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const signup = () => {
    console.log("signup");
    var body = {
      role: roleKey,
      username: username,
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    };

    console.log(body);
    Axios.post("user/userregister", body)
      .then((res) => {
        console.log(res);
        var Data = res.data;

        console.log(JSON.stringify(res));
        alert(res.data.message);
        if (res.data.message == "Register successfully!") {
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 1500);

          alert("You are Successfully Registerd");
          window.localStorage.setItem("userRole", Data.newUser.role);
          window.localStorage.setItem("userName", Data.newUser.username);
          window.localStorage.setItem("Email", Data.newUser.email);
          window.localStorage.setItem("Password", Data.newUser.password);
          window.localStorage.setItem(
            "ComfirmPassword",
            Data.newUser.confirmpassword
          );
          //window.location.reload();
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  useEffect(() => {
    console.log("Signup loaded!");
    console.log(location);
    setRoleKey(location.state.role);
    setemail(location.state.email);
  }, []);

  return (
    <div className="formr">
      <div className="form-bodyr">
        <h2
          style={{ textAlign: "center", color: "white", marginLeft: "-300px" }}
        >
          WELCOME{" "}
        </h2>
        <h3
          style={{
            textAlign: "left",
            color: "rgb(151, 150, 150)",
            marginLeft: "-150px",
          }}
        >
          Please Enter Your Info
        </h3>

        <form className="newUserFormr">
          <div className="newUserItemr">
            <label>User Role </label>
            <select
              className="newUserSelectc"
              name="role"
              id="active"
              disabled
              // onChange={(e) =>
              //   setRoleKey(e.target.value) + console.log(e.target.value)
              // }
            >
              <option value={roleKey}>{roleKey}</option>
              {/* <option value={"Admin"}>Admin</option>
              <option value={"Monitoring officer"}>Monitoring officer</option>
              <option value={"Custom officer"}>Custom officer</option> */}
            </select>
          </div>
          <div className="newUserItemr">
            <label>User Name</label>
            <input
              value={username}
              type="text"
              placeholder="typeyour username here"
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="newUserItemr">
            <label>Email</label>
            <input
              readOnly
              type="email"
              value={email}
              placeholder="john@gmail.com"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="newUserItemr">
            <label> Password</label>
            <input
              type="password"
              value={password}
              placeholder="enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="newUserItemr">
            <label> confirmpassword</label>
            <input
              type="password"
              value={confirmpassword}
              placeholder="re enter here..."
              onChange={(e) => setconfirmpassword(e.target.value)}
            />
          </div>

          <div className="newUserItemr">
            <button className="newUserButtonr" type="button" onClick={signup}>
              signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
