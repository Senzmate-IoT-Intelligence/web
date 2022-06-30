import React, { useEffect, useState } from "react";
import "./featuredInfo.css";
import { ArrowLeftSharp } from "@material-ui/icons";
//import { userData2 } from "../../dummyData";
import Axios from "axios";

export default function FeaturedInfoweekly() {
  const [data, setData] = useState([]);
  const [totalAccident, setTotalAccident] = useState(0);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    Axios.post("http://localhost:5000/api/reports/accident-count-weekly", {
      date: new Date("2022-03-06"),
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        test(res.data);
      })
      .catch((err) => console.log(err));
  };

  const test = async (res) => {
    console.log("clicked", res);
    let total = 0;
    for (let i = 0, l = res.length; i < l; i++) {
      total += res[i].Accidents;
    }
    setTotalAccident(total);

    console.log("total", total);
  };
  return (
    <div className="container">
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Accident Reported</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{totalAccident}</span>
            <span className="featuredMoneyRate">
              <ArrowLeftSharp className="featuredIcon1" />
            </span>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Numbe of Trips</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">4,415</span>
            <span className="featuredMoneyRate">
              <ArrowLeftSharp className="featuredIcon2" />
            </span>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Trips without Earning</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">2,225</span>
            <span className="featuredMoneyRate">
              <ArrowLeftSharp className="featuredIcon3" />
            </span>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Total Cash In</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">
              <ArrowLeftSharp className="featuredIcon4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
