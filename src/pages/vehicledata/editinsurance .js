import "./editinsurance.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link, useParams } from "react-router-dom";

export default function Editinsurancedetail() {
  const [values, setValues] = useState({
    monthlypremium: "",
    purchasedate: "",
    enddate: "",
    value: "",
    customerid: "",
    name: "",
  });

  const [monthlypremium, setmonthlypremium] = useState("");
  const [purchasedate, setpurchasedate] = useState("");
  const [enddate, setenddate] = useState("");
  const [value, setvalue] = useState("");
  const navigate = useNavigate();
  const { insuranceId } = useParams();

  const putData = () => {
    const data = {
      monthlypremium: monthlypremium,
      purchasedate: purchasedate,
      enddate: enddate,
      value: value,
    };
    console.log(data);
    Axios.put(
      `http://localhost:5000/api/insurancedetail/update/${insuranceId}`,
      data
    )
      .then((res) => {
        console.log(res);
        console.log(JSON.stringify(res));
        alert(res.data.message);
        if (res.data.message == "Insurance Detail updated successfully!") {
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
    console.log(insuranceId);
  }, []);

  return (
    <div className="newUserc">
      <h1 className="newUserTitlec">Edit Insurance Details</h1>
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
            placeholder="2010/2022.. "
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
          <button className="newUserButtonc" onClick={putData}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
