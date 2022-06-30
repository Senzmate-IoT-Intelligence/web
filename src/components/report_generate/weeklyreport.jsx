import Axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "../../components/chart/Chart";
import Chart2 from "../../components/chart/chart2";
import FeaturedInfoweekly from "../../components/featuredInfo/FeaturedInfo";
import Report from "../../components/report/report";
import Botompieweekly from "../widgetLg/WidgetLgweekly";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData3 } from "../../dummyData";
import "./weekly_report.css";

export default function Weekly_report() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    getdata();
  }, [date]);
  const getdata = () => {
    Axios.post("http://localhost:5000/api/reports/accident-count-weekly", {
      date: new Date(date),
    })
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
      <Chart
        data={userData3}
        title="Earning of Trip"
        grid
        dataKey="Cash In"
        dataKey2="Cash Out"
      />
      <div className="calander">
        <input
          type="date"
          id="start"
          name="trip-start"
          value={date}
          min="2022-01-01"
          max="2025-12-31"
          onChange={(date) => setDate(date.target.value)}
        />
      </div>
      <Chart2
        data={data}
        title="Accident Count"
        grid
        dataKey="Accidents"
        dataKey2="Trips"
      />

      <div className="homeWidgets">
        <WidgetSm />
        <Botompieweekly />
      </div>
    </div>
  );
}
