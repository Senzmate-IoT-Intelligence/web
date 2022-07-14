import Chart from "../../components/chart/Chart";
import Chart2 from "../../components/chart/chart2";
import Report from "../../components/report/report";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../dummyData";
import "./home.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import Bottompiedaily from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";

export default function Home() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    getdata();
  }, [date]);
  const getdata = () => {
    Axios.post("http://localhost:5000/api/reports/accident-count", {
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
      <FeaturedInfo />

      <Chart
        data={userData}
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
        <Bottompiedaily />
      </div>
    </div>
  );
}
