import "./addinsurance.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Addinsurancedetail() {
  const [values, setValues] = useState({
    monthlypremium: "",
    purchasedate: "",
    enddate: "",
    value: "",
    customerid: "",
    name: "",
  });
  const [customersList, setcustomersList] = useState([]);
  const [monthlypremium, setmonthlypremium] = useState("");
  const [purchasedate, setpurchasedate] = useState("");
  const [enddate, setenddate] = useState("");
  const [value, setvalue] = useState("");
  const [customerid, setcustomerid] = useState("");
  const [name, setname] = useState("");
  const navigate = useNavigate();

  const postData = () => {
    const data = {
      monthlypremium: monthlypremium,
      purchasedate: purchasedate,
      enddate: enddate,
      value: value,
      customerid: customerid,
      name: name,
    };
    console.log(data);
    Axios.post("http://localhost:5000/api/insurancedetail/create", data)
      .then((res) => {
        console.log(JSON.stringify(res));
        alert(res.data.msg);
        if (res.data.msg == "insurancedetail Added Successfully") {
          setTimeout(() => {
            navigate("/users");
            window.location.reload();
          }, 1500);
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
      <h1 className="newUserTitlec">Add Insurance Details</h1>
      <form className="newUserFormccc">
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
          <label> Monthlypremium</label>
          <input
            type="text"
            placeholder="AA 0001"
            onChange={(e) => setmonthlypremium(e.target.value)}
          />
        </div>
        <div className="newUserItemc">
          <label>Purchasedate</label>
          <input
            type="date"
            placeholder="2010/2022.."
            onChange={(e) => setpurchasedate(e.target.value)}
          />
        </div>

        <div className="newUserItemc">
          <label>Enddate</label>
          <input
            type="date"
            placeholder="SV30-0169266 "
            onChange={(e) => setenddate(e.target.value)}
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
