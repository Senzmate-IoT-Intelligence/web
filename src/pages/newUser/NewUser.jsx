import "./newUser.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function NewUser() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    nic: "",
    contact: "",
    contact: null,
    insurancetype: "",
    numofaccidents: "",
  });

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [nic, setnic] = useState("");
  const [contact, setContact] = useState("");
  const [insurancetype, setinsurancetype] = useState("");
  const [numofaccidents, setnumofaccidents] = useState("");

  const postData = () => {
    const data = {
      name: name,
      email: email,
      nic: nic,
      contactnumber: contact,
      insurancetype: insurancetype,
      numberofaccidents: numofaccidents,
    };
    console.log(data);
    Axios.post("http://localhost:5000/api/customer/create", data).then((res) =>
      console.log(res)
    );
  };

  return (
    <div className="newUserc">
      <h1 className="newUserTitlec">Add New Customer</h1>
      <form className="newUserFormc">
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
          <input
            type="text"
            placeholder="Thirdparty/..."
            onChange={(e) => setinsurancetype(e.target.value)}
          />
        </div>

        <div className="newUserItemc">
          <label> Number Of Accidents</label>
          <input
            type="text"
            placeholder="1/30..."
            onChange={(e) => setnumofaccidents(e.target.value)}
          />
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
