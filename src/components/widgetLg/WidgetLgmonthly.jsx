import "./widgetLg.css";

import { PieChart, Pie, Cell } from "recharts";
import { AddCircleOutline } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Axios from "axios";

/*const data = [
  { name: "Accidents", value: 50 },
  { name: "Trips", value: 300 },
];*/

const COLORS = ["#0088FE", "#00186e"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Botompiemonthly() {
  const [data, setData] = useState([]);
  const [totalAccident, setTotalAccident] = useState(0);
  const [totalTrip, setTotalTrip] = useState(0);

  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    Axios.post("http://localhost:5000/api/reports/accident-count-monthly", {
      date: new Date("2022-03-06"),
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        test(res.data);
        test2(res.data);
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

  const test2 = async (res) => {
    console.log("clicked", res);
    let total = 0;
    for (let i = 0, l = res.length; i < l; i++) {
      total += res[i].Trips;
    }

    setTotalTrip(total);

    console.log("total", total);
  };
  const data2 = [
    { name: "Accidents", value: totalAccident },
    { name: "Trips", value: totalTrip },
  ];

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Monthly-Accidents vs Trips</span>

      <PieChart width={400} height={400}>
        <Pie
          data={data2}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <AddCircleOutline className="featuredIcon1" />
      <span className="featuredTitle">Accident</span>
      <AddCircleOutline className="featuredIcon2" />
      <span className="featuredTitle">Trips</span>
    </div>
  );
}
