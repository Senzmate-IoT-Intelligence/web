import "./newUser.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function NewUser() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    nic: "",
    contact: "",
    contact: null,
    insurancetype: "",
  });

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [nic, setnic] = useState("");
  const [contact, setContact] = useState("");
  const [insurancetype, setinsurancetype] = useState("");

  const postData = () => {
    const data = {
      name: name,
      email: email,
      nic: nic,
      contactnumber: contact,
      insurancetype: insurancetype,
    };
    console.log(data);
    Axios.post("http://localhost:5000/api/customer/create", data)
      .then((res) => {
        console.log(JSON.stringify(res));
        alert(res.data.msg);
        if (res.data.msg == "Customer Added Successfully") {
          setTimeout(() => {
            navigate("/users");
          }, 1500);
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  return (
    <div className="newUserc">
      <h1 className="newUserTitlec">Add New Customer</h1>
      <form className="newUserFormcc">
        <div className="newUserItemc">
          <label> Name</label>
          <input
            type="text"
            placeholder="John Smith"
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="newUserItemc">
          <label>Email</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className="newUserItemc">
          <label>Nic</label>
          <input
            type="text"
            placeholder="0001A"
            onChange={(e) => setnic(e.target.value)}
          />
        </div>

        <div className="newUserItemc">
          <label>Contact Number</label>
          <input
            type="text"
            placeholder="+94760073341"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <div className="newUserItemc">
          <label> Insurance Type</label>
          <select
            className="newUserSelectc"
            name="insurancetype"
            id="active"
            onChange={(e) =>
              setinsurancetype(e.target.value) + console.log(e.target.value)
            }
          >
            <option value={"First Party"}>First Party</option>
            <option value={"Third Party"}>Third Party</option>
          </select>
        </div>

        <div className="newUserItemc">
          <button className="newUserButtonc" onClick={postData}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
