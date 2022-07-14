import { CalendarToday, PermIdentity, PhoneAndroid } from "@material-ui/icons";

import { Link, useParams } from "react-router-dom";
import "./vd.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  Numbers,
  NumbersRounded,
  PriceChange,
  Square,
} from "@mui/icons-material";

export default function User2() {
  const [vehicle, setvehicle] = useState([]);
  const [insurance, setinsurance] = useState([]);
  const { userId } = useParams();

  // useEffect(() => {
  //   getData();
  // });

  const getData = () => {
    Axios.get(`http://localhost:5000/api/vehicle/show/${userId}`)
      .then((res) => {
        setvehicle(res.data.response);
        console.log(res.data.response);
      })
      .catch((err) => console.log(err));
    console.log(vehicle);
  };

  useEffect(() => {
    getData();
    getData2();
  }, []);

  const getData2 = () => {
    Axios.get(`http://localhost:5000/api/insurancedetail/show/${userId}`)
      .then((res) => {
        setinsurance(res.data.response);
      })
      .catch((err) => console.log(err));
    console.log(vehicle);
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">{vehicle.name}</h1>
        <Link to={"/editvehicledetail/" + vehicle._id}>
          <button className="userAddButtonv">update Vehicle Detail</button>
        </Link>
        <Link to={"/editinsurance/" + insurance._id}>
          <button className="userAddButtoni">update Insurance Detail</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTopTitle">
            <span className="userUpdateTitlev">Vehicle Details</span>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Vehicle Info-{vehicle.name}</span>

            <div className="userShowInfo">
              <NumbersRounded className="userShowIcon" />
              <label> vehicle plate number</label>
              <span className="userShowInfoTitle1">
                {vehicle.vehiclenumber}
              </span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <label>Manufacturedyear</label>
              <span className="userShowInfoTitle2">
                {vehicle.manufacturedyear}
              </span>
            </div>
            <div className="userShowInfo">
              <Square className="userShowIcon" />
              <label>VIN Number</label>
              <span className="userShowInfoTitle3">
                {vehicle.chassisnumber}
              </span>
            </div>
            <div className="userShowInfo">
              <PriceChange className="userShowIcon" />
              <label>Price</label>
              <span className="userShowInfoTitle5">{vehicle.value}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Insurance Details</span>

          <div className="userUpdateLeft">
            <div className="userShowBottom">
              <span className="userShowTitle">
                Insurance Info -{vehicle.name}
              </span>
              <div className="userShowInfoi">
                <NumbersRounded className="userShowIconi" />
                <label> Monthlypremium</label>
                <span className="userShowInfoTitle1i">
                  {insurance.monthlypremium}
                </span>
              </div>
              <div className="userShowInfoi">
                <CalendarToday className="userShowIconi" />
                <label>Purchasedate</label>
                <span className="userShowInfoTitle2i">
                  {insurance.purchasedate}
                </span>
              </div>
              <div className="userShowInfoi">
                <Square className="userShowIconi" />
                <label>Enddate</label>
                <span className="userShowInfoTitle3i">{insurance.enddate}</span>
              </div>
              <div className="userShowInfoi">
                <PriceChange className="userShowIconi" />
                <label>Price</label>
                <span className="userShowInfoTitle4i">{insurance.value}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
