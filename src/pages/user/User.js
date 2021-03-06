import {
  AddCircleOutline,
  CalendarToday,
  CardTravelSharp,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./user.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function User() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [nic, setnic] = useState("");
  const [contact, setContact] = useState("");
  const [insurancetype, setinsurancetype] = useState("");

  const [customer, setEmployee] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const putData = () => {
    const data = {
      name: name,
      email: email,
      nic: nic,
      contactnumber: contact,
      insurancetype: insurancetype,
    };
    console.log(data);
    Axios.put(`http://localhost:5000/api/customer/update/${userId}`, data)
      .then((res) => {
        console.log(res);
        console.log(JSON.stringify(res));
        alert(res.data.message);
        if (res.data.message == "Customer updated successfully!") {
          setTimeout(() => {
            navigate("/users");
          }, 1500);
          //window.location.reload();
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  const getData = () => {
    Axios.get(`http://localhost:5000/api/customer/show/${userId}`)
      .then((res) => {
        setEmployee(res.data.response);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="usere">
      <div className="userTitleContainere">
        <h1 className="userTitlee">Edit Customer Details</h1>
      </div>
      <div className="userContainere">
        <div className="userShowe">
          <div className="userShowTope">
            <img
              src="https://thumbs.dreamstime.com/b/icon-profile-circle-shadow-color-dark-blue-background-color-white-icon-profile-circle-shadow-color-dark-blue-194699287.jpg"
              alt=""
              className="userShowImge"
            />
            <div className="userShowTopTitlee">
              <span className="userShowUsernamee"> {customer.name}</span>
            </div>
          </div>
          <div className="userShowBottome">
            <span className="userShowTitlee">Account Details</span>
            <div className="userShowInfoe">
              <PermIdentity className="userShowIcone" />
              <span className="userShowInfoTitlee"> {customer.name}</span>
            </div>
            <div className="userShowInfoe">
              <CalendarToday className="userShowIcone" />
              <span className="userShowInfoTitlee"> {customer.email}</span>
            </div>
            <div className="userShowInfoe">
              <AddCircleOutline className="userShowIcone" />
              <span className="userShowInfoTitlee"> {customer.nic}</span>
            </div>
            <div className="userShowInfoe">
              <PhoneAndroid className="userShowIcone" />
              <span className="userShowInfoTitlee">
                {" "}
                {customer.contactnumber}
              </span>
            </div>
            <div className="userShowInfoe">
              <CardTravelSharp className="userShowIcone" />
              <span className="userShowInfoTitlee">
                {customer.insurancetype}
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdatee">
          <span className="userUpdateTitlee">Edit</span>
          <form className="userUpdateForme">
            <div className="userUpdateLefte">
              <div className="userUpdateIteme">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  onChange={(e) => setname(e.target.value)}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateIteme">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="annabeck99@gmail.com"
                  onChange={(e) => setemail(e.target.value)}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateIteme">
                <label>Nic</label>
                <input
                  type="text"
                  placeholder="your nic here"
                  onChange={(e) => setnic(e.target.value)}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateIteme">
                <label>Contact Number</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  onChange={(e) => setContact(e.target.value)}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateIteme">
                <label>Insurance Type</label>
                <select
                  className="newUserSelectc"
                  name="insurancetype"
                  id="active"
                  onChange={(e) =>
                    setinsurancetype(e.target.value) +
                    console.log(e.target.value)
                  }
                >
                  <option value={"First Party"}>First Party</option>
                  <option value={"Third Party"}>Third Party</option>
                </select>
              </div>
            </div>
            <div className="userUpdateRighte">
              <div className="userUpdateUploade">
                <img
                  className="userUpdateImg"
                  src="https://thumbs.dreamstime.com/b/icon-profile-circle-shadow-color-dark-blue-background-color-white-icon-profile-circle-shadow-color-dark-blue-194699287.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcone" />
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
