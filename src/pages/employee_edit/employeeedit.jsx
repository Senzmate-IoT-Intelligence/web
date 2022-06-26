import {
  CalendarToday,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./employeeedit.css";

import Axios from "axios";

export default function Edit_emp() {
  const [employeeId, setEmployeeId] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [contact, setContact] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState("");
  const [employee, setEmployee] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    getData();
  });

  const putData = () => {
    const data = {
      employeeID: employeeId,
      role: role,
      name: name,
      department: department,
      contactnumber: contact,
      occupation: occupation,
      email: email,
      accesspermissions: permissions,
    };
    console.log(data);
    Axios.put(`http://localhost:5000/api/employee/update/${userId}`, data).then(
      (res) => console.log(res)
    );
  };

  const getData = () => {
    Axios.get(`http://localhost:5000/api/employee/show/${userId}`)
      .then((res) => {
        setEmployee(res.data.response);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Employee Details- {employee.name}</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://etimg.etb2bimg.com/photo/81507854.cms"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Saman Perera</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{employee.employeeID}</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{employee.role}</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{employee.name}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{employee.department}</span>
            </div>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">
                {employee.contactnumber}
              </span>
            </div>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{employee.occupation}</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{employee.email}</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">
                {employee.accesspermissions}
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>ID</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Role</label>
                <input
                  type="text"
                  placeholder="Admin"
                  className="userUpdateInput"
                  //value={employee.role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="yourname"
                  className="userUpdateInput"
                  //value={employee.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Deparment</label>
                <input
                  type="text"
                  placeholder="claims/finance/legal/markerting/underwriting"
                  className="userUpdateInput"
                  //value={employee.department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Contactnumber</label>
                <input
                  type="text"
                  placeholder="0771234432"
                  className="userUpdateInput"
                  //value={employee.contactnumber}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              <div className="userUpdateItem">
                <label>Occupation</label>
                <input
                  type="text"
                  placeholder="claims representative/.."
                  className="userUpdateInput"
                  //value={employee.occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="sgshsbsh@gmail.com"
                  className="userUpdateInput"
                  //value={employee.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Accesspermissions</label>
                <input
                  type="text"
                  placeholder="All/Monitoring Dashboard/Custom"
                  className="userUpdateInput"
                  //value={employee.accesspermissions}
                  onChange={(e) => setPermissions(e.target.value)}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://etimg.etb2bimg.com/photo/81507854.cms"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" onClick={putData}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
