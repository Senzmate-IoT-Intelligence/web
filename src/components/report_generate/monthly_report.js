import Report from "../report/report";
import Chart from "../chart/Chart";
import Chart2 from "../chart/chart2";

import FeaturedInfomonthly from "../featuredInfo/FeaturedInfomonthly";
import "./weekly_report.css";
import { userData5 } from "../../dummyData";
//import { userData6 } from "../../dummyData";
import Axios from "axios";
import { useEffect, useState } from "react";

import WidgetSm from "../widgetSm/WidgetSm";
import Botompiemonthly from "../widgetLg/WidgetLgmonthly";

export default function Monthly_report() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    getdata();
  }, [date]);
  const getdata = () => {
    Axios.post("http://localhost:5000/api/reports/accident-count-monthly", {
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
      <FeaturedInfomonthly />
      <Chart
        data={userData5}
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
          //min="2022-01-01"
          max={new Date().toISOString().substring(0, 10)}
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
        <Botompiemonthly />
      </div>
    </div>
  );
}
