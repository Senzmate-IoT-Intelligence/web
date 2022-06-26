import "./adddetail.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Addvehicledetail() {
  const [values, setValues] = useState({
    vehiclenumber: "",
    manufacturedyear: "",
    chassisnumber: "",
    value: "",
    customerid: "",
  });

  const [vehiclenumber, setvehiclenumber] = useState("");
  const [manufacturedyear, setmanufacturedyear] = useState("");
  const [chassisnumber, setchassisnumber] = useState("");
  const [value, setvalue] = useState("");
  const [customerid, setcustomerid] = useState("");

  const postData = () => {
    const data = {
      vehiclenumber: vehiclenumber,
      manufacturedyear: manufacturedyear,
      chassisnumber: chassisnumber,
      value: value,
      customerid: customerid,
    };
    console.log(data);
    Axios.post("http://localhost:5000/api/vehicle/create", data).then((res) =>
      console.log(res)
    );
  };

  return (
    <div className="newUserc">
      <h1 className="newUserTitlec">Add Vehicle Details</h1>
      <form className="newUserFormc">
        <div className="newUserItemc">
          <label> Vehiclenumber</label>
          <input
            type="text"
            placeholder="AA 0001"
            onChange={(e) => setvehiclenumber(e.target.value)}
          />
        </div>
        <div className="newUserItemc">
          <label>Manufacturedyear</label>
          <input
            type="number"
            placeholder="2010/2022.."
            onChange={(e) => setmanufacturedyear(e.target.value)}
          />
        </div>

        <div className="newUserItemc">
          <label>Chassisnumber</label>
          <input
            type="text"
            placeholder="SV30-0169266 "
            onChange={(e) => setchassisnumber(e.target.value)}
          />
        </div>

        <div className="newUserItemc">
          <label>Price</label>
          <input
            type="text"
            placeholder="Rs 60,0000"
            onChange={(e) => setvalue(e.target.value)}
          />
        </div>

        <div className="newUserItemc">
          <label>Customerid</label>
          <input
            type="text"
            placeholder="Rs 60,0000"
            onChange={(e) => setcustomerid(e.target.value)}
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
