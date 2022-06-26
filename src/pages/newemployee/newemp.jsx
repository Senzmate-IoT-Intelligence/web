import "./newemp.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function New_Employee() {
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
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [contact, setContact] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState("");

  const postData = () => {
    const data = {
      employeeID: EmployeeId,
      role: role,
      name: name,
      department: department,
      contactnumber: contact,
      occupation: occupation,
      email: email,
      accesspermissions: permissions,
    };
    console.log(data);
    Axios.post("http://localhost:5000/api/employee/create", data).then((res) =>
      console.log(res)
    );
  };

  return (
    <div className="newUsere">
      <h1 className="newUserTitlee">Add New Employee Details</h1>
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
          <input
            type="text"
            placeholder="Admin/Monitoring Officer/Cusom Ofiicer"
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="newUserIteme">
          <label>Name</label>
          <input
            type="text"
            placeholder="yourname here"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="newUserIteme">
          <label>Department</label>
          <input
            type="text"
            placeholder="claims/finance/legal/markerting/underwriting"
            onChange={(e) => setDepartment(e.target.value)}
          />
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
          <input
            type="text"
            placeholder="All/Monitoring Dashboard/CustomSE/DA/GM..."
            onChange={(e) => setPermissions(e.target.value)}
          />
        </div>

        <div className="newUserIteme">
          <button className="newUserButtone" onClick={postData}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
