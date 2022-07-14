import "./adddetail.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Addvehicledetail() {
  const [values, setValues] = useState({
    vehiclenumber: "",
    manufacturedyear: "",
    chassisnumber: "",
    value: "",
    customerid: "",
    name: "",
  });

  const [customersList, setcustomersList] = useState([]);
  const [vehiclenumber, setvehiclenumber] = useState("");
  const [manufacturedyear, setmanufacturedyear] = useState("");
  const [chassisnumber, setchassisnumber] = useState("");
  const [value, setvalue] = useState("");
  const [customerid, setcustomerid] = useState("");
  const [name, setname] = useState("");
  const navigate = useNavigate();

  const postData = () => {
    const data = {
      vehiclenumber: vehiclenumber,
      manufacturedyear: manufacturedyear,
      chassisnumber: chassisnumber,
      value: value,
      customerid: customerid,
      name: name,
    };
    console.log(data);
    Axios.post("http://localhost:5000/api/vehicle/create", data)
      .then((res) => {
        console.log(res);
        console.log(JSON.stringify(res));
        alert(res.data.msg);
        if (res.data.msg == "Vehicle Detail Added Successfully") {
          setTimeout(() => {
            navigate("/users");
            window.location.reload();
          }, 1500);
          //window.location.reload();
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  const getCustomers = () => {
    Axios.get("http://localhost:5000/api/customer/getall")
      .then((res) => {
        console.log(res.data);
        setcustomersList(res.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  const selectCustomer = (name) => {
    console.log(name);
    setname(name);
    let customerID = customersList.find((e) => e.name == name)._id;
    console.log(customerID);
    setcustomerid(customerID);
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="newUserc">
      <h1 className="newUserTitlec">Add Vehicle Details</h1>
      <form className="newUserFormch">
        <div className="newUserItemc">
          <label>Customer Name</label>

          <select
            className="newUserSelectc"
            name="customerName"
            id="active"
            placeholder="Select Customer"
            onChange={(e) => selectCustomer(e.target.value)}
          >
            <option disabled={true} value="Select Customer">
              Select Customer
            </option>
            {customersList.map((item, i) => {
              return (
                <option key={i} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="newUserItemc">
          <label> vehicle plate number</label>
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
          <button className="newUserButtonc" onClick={postData}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
