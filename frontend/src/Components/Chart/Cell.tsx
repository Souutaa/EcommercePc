import React from "react";
import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts";
const data = [
  {
    name: "Đã giao",
    now: 3,
    total: 20,
    fill: "rgb(10, 207, 151)",
  },
  {
    name: "Đang xử lý",
    now: 4,
    total: 20,
    fill: "rgba(255, 195, 66, 1)",
  },
  {
    name: "Đang giao",
    now: 13,
    total: 20,
    fill: "#727cf5",
  },
  {
    name: "Đã hủy",
    now: 14,
    total: 20,
    fill: "rgba(255, 66, 66, 1)",
  },
];

const Cell = () => {
  return (
    <RadialBarChart
      width={400}
      height={300}
      innerRadius="10%"
      outerRadius="80%"
      data={data}
      startAngle={0}
      endAngle={360}
    >
      <RadialBar
        label={{ fill: "", position: "insideStart" }}
        background
        dataKey="now"
      />
      <Legend
        iconSize={12}
        width={120}
        height={260}
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
      <Tooltip />
    </RadialBarChart>
  );
};

export default Cell;
