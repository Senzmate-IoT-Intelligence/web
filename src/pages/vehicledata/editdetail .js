import "./editdetail.css";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Editvehicledetail() {
  const [values, setValues] = useState({
    vehiclenumber: "",
    manufacturedyear: "",
    chassisnumber: "",
    value: "",
    customerid: "",
    name: "",
  });

  const [vehiclenumber, setvehiclenumber] = useState("");
  const [manufacturedyear, setmanufacturedyear] = useState("");
  const [chassisnumber, setchassisnumber] = useState("");
  const [value, setvalue] = useState("");
  const [customerid, setcustomerid] = useState("");
  const [name, setname] = useState("");
  const navigate = useNavigate();
  const { vehicleId } = useParams();

  const putData = () => {
    const data = {
      vehiclenumber: vehiclenumber,
      manufacturedyear: manufacturedyear,
      chassisnumber: chassisnumber,
      value: value,
      //customerid: customerid,
      // name: name,
    };
    console.log(data);
    Axios.put(`http://localhost:5000/api/vehicle/update/${vehicleId}`, data)
      .then((res) => {
        console.log(res);
        console.log(JSON.stringify(res));
        alert(res.data.message);
        if (res.data.message == "Vehicle Detail updated successfully!") {
          setTimeout(() => {
            navigate("/vehicledetail");
            window.location.reload();
          }, 1500);
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  useEffect(() => {
    console.log(vehicleId);
  }, []);

  return (
    <div className="newUserc">
      <h1 className="newUserTitlec">Edit Vehicle Details</h1>
      <form className="newUserFormcccc">
        <div className="newUserItemc">
          <label>vehicle plate number</label>
          <input
            type="text"
            placeholder="AA 0001"
            onChange={(e) => setvehiclenumber(e.target.value)}
          />
        </div>
        <div className="newUserItemc">
          <label>Manufacturedyear</label>
          <input
            type="text"
            placeholder="2010/2022.."
            onChange={(e) => setmanufacturedyear(e.target.value)}
          />
        </div>

        <div className="newUserItemc">
          <label>VIN Number</label>
          <input
            type="text"
            placeholder="1hwa31aa5ae006086"
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
          <button className="newUserButtonc" onClick={putData}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
