import React, { useState } from "react";
import  "./regstyle.css";
import Axios from "axios";

const Register = () => {
  const [roleKey, setRoleKey] = useState("");
  const [username,setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const signup = () => {
    console.log("signup");
    var body = {
      role: roleKey,
      username:username,
      email:email,
      password:password,
      confirmpassword: confirmpassword,
    };

    console.log(body);
    Axios.post("user/userregister", body)
      .then((response) => {
        var Data = response.data;
        console.log("Response", response.data);
        window.localStorage.setItem("userRole", Data.newUser.role);
        window.localStorage.setItem("userName", Data.newUser.username);
        window.localStorage.setItem("Email", Data.newUser.email);
        window.localStorage.setItem("Password", Data.newUser.password);
        window.localStorage.setItem("ComfirmPassword", Data.newUser.confirmpassword);
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };



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
            <input
             value={roleKey}
              type="text"
              placeholder="admin/monitoring officer/custom officer"
              onChange={(e) => setRoleKey(e.target.value)}
            />
          </div>
          <div className="newUserItemr">
            <label>User Name</label>
            <input
             value={username}
              type="text"
              placeholder="admin/monitoring officer/custom officer"
              onChange={(e) => setusername(e.target.value)}
         
            />
           
          </div>
          <div className="newUserItemr">
            <label>Email</label>
            <input type="email" value={email} placeholder="john@gmail.com"
                  onChange={(e) => setemail(e.target.value)} />
      
          </div>

          <div className="newUserItemr">
            <label> Password</label>
            <input type="text"value={password} placeholder="enter your password..."    onChange={(e) => setPassword(e.target.value)} />
        
          </div>

          <div className="newUserItemr">
            <label> confirmpassword</label>
            <input type="text" value={confirmpassword} placeholder="re enter here..."    onChange={(e) => setconfirmpassword(e.target.value)}/>
         
          </div>

          <div className="newUserItemr">
         
            <button className="newUserButtonr"type="button" onClick={signup}>signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
