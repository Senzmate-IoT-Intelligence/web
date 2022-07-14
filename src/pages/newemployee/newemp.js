import "./newemp.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "axios";

export default function New_Employee() {
  const userRole = window.localStorage.getItem("userRole");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    employeeId: "",
    role: "",
    name: "",
    department: "",
    contact: null,
    occupation: "",
    email: "",
    permissions: "",
  });
  const [EmployeeId, setEmployeeId] = useState("");
  const [roleKey, setRoleKey] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [contact, setContact] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState("");

  const postData = () => {
    const data = {
      employeeID: EmployeeId,
      role: roleKey,
      name: name,
      department: department,
      contactnumber: contact,
      occupation: occupation,
      email: email,
      accesspermissions: permissions,
    };
    console.log(data);
    Axios.post("http://localhost:5000/api/employee/create", data)
      .then((res) => {
        console.log(JSON.stringify(res));
        alert(res.data.msg);
        if (res.data.msg == "Employee Added Successfully") {
          setTimeout(() => {
            navigate("/employee");
            window.location.reload();
          }, 1500);
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  return (
    <div className="newUsere">
      <h1 className="newUserTitlee">Add New Employee Details</h1>
      {userRole == "Admin" && (
        <form className="newUserForme">
          <div className="newUserIteme">
            <label>ID</label>
            <input
              type="text"
              placeholder="1A/1M/1C.."
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </div>
          <div className="newUserIteme">
            <label>Role</label>
            <select
              className="newUserSelectc"
              name="role"
              id="active"
              onChange={(e) =>
                setRoleKey(e.target.value) + console.log(e.target.value)
              }
            >
              <option value={"Admin"}>Admin</option>
              <option value={"Monitoring Officer"}>Monitoring Officer</option>
              <option value={"Custom Officer"}>Custom Officer</option>
            </select>
          </div>
          <div className="newUserIteme">
            <label>Name</label>
            <input
              type="text"
              placeholder="yourname here"
              onChange={(e) => setName(e.target.value)} //claims/finance/legal/markerting/underwriting
            />
          </div>

          <div className="newUserIteme">
            <label>Department</label>
            <select
              className="newUserSelectc"
              name="department"
              id="active"
              onChange={(e) =>
                setDepartment(e.target.value) + console.log(e.target.value)
              }
            >
              <option value={"claims"}>Claims</option>
              <option value={"finance"}>Finance</option>
              <option value={"legal"}>Legal</option>
              <option value={"markerting"}>Markerting</option>
              <option value={"underwriting"}>Underwriting</option>
            </select>
          </div>

          <div className="newUserIteme">
            <label> Contactnumber</label>
            <input
              type="text"
              placeholder="0771234432"
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div className="newUserIteme">
            <label> Occupation</label>
            <input
              type="text"
              placeholder="claims representative/.."
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>

          <div className="newUserIteme">
            <label> Email</label>
            <input
              type="text"
              placeholder="Saman123@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="newUserIteme">
            <label> Access_permissions</label>
            <select
              className="newUserSelectc"
              name="accesspermissions"
              id="active"
              onChange={(e) =>
                setPermissions(e.target.value) + console.log(e.target.value)
              }
            >
              <option value={"All Dashboard"}>All Dashboard</option>
              <option value={"Monitoring Dahboard"}>Monitoring Dahboard</option>
              <option value={"Custom Care Dahboard"}>
                Custom Care Dahboard
              </option>
            </select>
          </div>
          <div className="newUserItemc">
            <button className="newUserButtonc" onClick={postData}>
              Create
            </button>
          </div>

          <div className="newUserIteme"></div>
        </form>
      )}
    </div>
  );
}
