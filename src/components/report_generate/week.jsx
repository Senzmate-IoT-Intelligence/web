import Report from "../../components/report/report";
import Chart from "../../components/chart/Chart";
import Chart2 from "../../components/chart/chart2";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../dummyData";
import { userData2 } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import FeaturedInfoweekly from "../featuredInfo/FeaturedInfoweekly";

export default function week() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    Axios.get("http://localhost:5000/api/customer/getall")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <Report />
      <FeaturedInfoweekly />
      {/* <Chart
        data={userData}
        title="Earning of Trip"
        grid
        dataKey="Cash In"
        dataKey2="Cash Out"
      /> */}
      <Chart2
        data={data}
        title="Accident Count"
        grid
        dataKey="numberofaccidents"
        /* dataKey2="Trips" */
      />

      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
