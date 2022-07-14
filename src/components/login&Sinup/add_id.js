import React, { useState } from "react";
import "./useridval.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Useridval = () => {
  const navigate = useNavigate();
  const [employeeID, setemployeeID] = useState("");

  const Postdata = () => {
    console.log("ok");
    const data = {
      employeeID: employeeID,
    };
    console.log(data);
    Axios.post("employee/check", data)
      .then((res) => {
        console.log(JSON.stringify(res));
        alert(res.data.msg);
        if (res.data.msg == "Please fill the signup details to register") {
          setTimeout(() => {
            navigate("/signup", { state: res.data.data });
          }, 1500);
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  return (
    <div className="formr1">
      <div className="form-bodyr1">
        <h2
          style={{
            textAlign: "center",
            color: "white",
            marginLeft: "-250px",
            marginTop: "20px",
          }}
        >
          Employee Id Vertification{" "}
        </h2>
        <h3
          style={{
            textAlign: "left",
            color: "rgb(151, 150, 150)",
            marginLeft: "-140px",
          }}
        >
          {" "}
          Please Enter Your Info
        </h3>

        <form className="newUserFormr1">
          <div className="newUserItemr1">
            <label>Employee Id</label>
            <input
              //value={employeeID}
              type="text"
              placeholder="typeyour employeeid here"
              onChange={(e) => setemployeeID(e.target.value)}
            />
          </div>

          <div className="newUserItemr1">
            <button
              className="newUserButtonr1"
              type="button"
              onClick={Postdata}
            >
              ok
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Useridval;
