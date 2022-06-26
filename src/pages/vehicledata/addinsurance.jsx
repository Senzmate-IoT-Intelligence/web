import "./addinsurance.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Addinsurancedetail() {
  const [values, setValues] = useState({
    monthlypremium: "",
    purchasedate: "",
    enddate: "",
    value: "",
    customerid: "",
  });

  const [monthlypremium, setmonthlypremium] = useState("");
  const [purchasedate, setpurchasedate] = useState("");
  const [enddate, setenddate] = useState("");
  const [value, setvalue] = useState("");
  const [customerid, setcustomerid] = useState("");

  const postData = () => {
    const data = {
      monthlypremium: monthlypremium,
      purchasedate: purchasedate,
      enddate: enddate,
      value: value,
      customerid: customerid,
    };
    console.log(data);
    Axios.post("http://localhost:5000/api/insurancedetail/create", data).then(
      (res) => console.log(res)
    );
  };

  return (
    <div className="newUserc">
      <h1 className="newUserTitlec">Add Insurance Details</h1>
      <form className="newUserFormc">
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
