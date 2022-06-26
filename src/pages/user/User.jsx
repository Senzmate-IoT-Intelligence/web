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

export default function User() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [nic, setnic] = useState("");
  const [contact, setContact] = useState("");
  const [insurancetype, setinsurancetype] = useState("");
  const [numofaccidents, setnumofaccidents] = useState("");
  const [customer, setEmployee] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    getData();
  });

  const putData = () => {
    const data = {
      name: name,
      email: email,
      nic: nic,
      contactnumber: contact,
      insurancetype: insurancetype,
      numberofaccidents: numofaccidents,
    };
    console.log(data);
    Axios.put(`http://localhost:5000/api/customer/update/${userId}`, data).then(
      (res) => console.log(res)
    );
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
              src="https://media.istockphoto.com/photos/young-businessman-with-beard-smiling-towards-camera-picture-id660150716?k=20&m=660150716&s=612x612&w=0&h=8jOsv-5u9yxEBrnSq56B83YLmEv28wZZ6Di7FrBNd1k="
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
              <span className="userShowInfoTitlee"> {customer.contact}</span>
            </div>
            <div className="userShowInfoe">
              <CardTravelSharp className="userShowIcone" />
              <span className="userShowInfoTitlee">
                {customer.insurancetype}
              </span>
            </div>
            <div className="userShowInfoe">
              <CardTravelSharp className="userShowIcone" />
              <span className="userShowInfoTitlee">
                {customer.numofaccidents}
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
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  onChange={(e) => setemail(e.target.value)}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateIteme">
                <label>Nic</label>
                <input
                  type="text"
                  placeholder="active/not"
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
                <input
                  type="text"
                  placeholder="first/third"
                  onChange={(e) => setinsurancetype(e.target.value)}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateIteme">
                <label>Number Of Accidents</label>
                <input
                  type="text"
                  placeholder="1/30/.."
                  onChange={(e) => setnumofaccidents(e.target.value)}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRighte">
              <div className="userUpdateUploade">
                <img
                  className="userUpdateImg"
                  src="https://media.istockphoto.com/photos/young-businessman-with-beard-smiling-towards-camera-picture-id660150716?k=20&m=660150716&s=612x612&w=0&h=8jOsv-5u9yxEBrnSq56B83YLmEv28wZZ6Di7FrBNd1k="
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
