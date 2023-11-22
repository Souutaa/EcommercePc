import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AreaCharts = () => {
  const data = [
    {
      name: "Jan",
      pv: 2400,
      amt: 150000,
    },
    {
      name: "Feb",

      pv: 1398,
      amt: 150000,
    },
    {
      name: "Mar",
      pv: 12000,
      amt: 150000,
    },
    {
      name: "Apr",

      pv: 3908,
      amt: 150000,
    },
    {
      name: "May",

      pv: 4800,
      amt: 150000,
    },
    {
      name: "Jun",

      pv: 3800,
      amt: 150000,
    },
    {
      name: "Jul",

      pv: 4300,
      amt: 150000,
    },
    {
      name: "Aug",

      pv: 4300,
      amt: 150000,
    },
    {
      name: "Sep",

      pv: 4300,
      amt: 150000,
    },
    {
      name: "Nov",

      pv: 4300,
      amt: 150000,
    },
    {
      name: "Dec",

      pv: 4300,
      amt: 150000,
    },
  ];
  return (
    <AreaChart
      style={{ width: "100%" }}
      width={1200}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="10%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />

      <Area
        type="monotone"
        dataKey="pv"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
};

export default AreaCharts;
