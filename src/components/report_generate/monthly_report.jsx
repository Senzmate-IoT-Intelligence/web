import Report from "../../components/report/report";
import Chart from "../../components/chart/Chart";
import Chart2 from "../../components/chart/chart2";

import FeaturedInfomonthly from "../../components/featuredInfo/FeaturedInfo";
import "./weekly_report.css";
import { userData5 } from "../../dummyData";
//import { userData6 } from "../../dummyData";
import Axios from "axios";
import { useEffect, useState } from "react";

import WidgetSm from "../../components/widgetSm/WidgetSm";
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
        <Botompiemonthly />
      </div>
    </div>
  );
}
