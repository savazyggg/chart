import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = () => {
  const user = useSelector((state) => state.user.value);
  const userData = user.data;
  const mergedData = userData.reduce((acc, cur) => {
    const index = acc.findIndex((x) => x.기간 === cur.period);
    if (index === -1) {
      const obj = { 기간: cur.period };
      obj[cur.group] = cur.ratio;
      acc.push(obj);
    } else {
      acc[index][cur.group] = cur.ratio;
    }
    return acc;
  }, []);

  console.log(mergedData);

  const color = [
    "#8884d8",
    "#82ca9d",
    "#c1c1c1",
    "#ff6961",
    "#77dd77",
    "#ffd700",
    "#ba55d3",
  ];
  const colorSet = (key) => {
    switch (key) {
      case "10":
        return color[0];
      case "20":
        return color[1];
      case "30":
        return color[2];
      case "40":
        return color[3];
      case "50":
        return color[4];
      case "60":
        return color[5];
      default:
        return color[0];
    }
  };

  return (
    <LineChart width={600} height={300} data={mergedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="기간" />
      <YAxis />
      <Tooltip />
      <Legend />
      {Object.keys(mergedData[0])
        .filter((key) => key !== "기간")
        .map((key) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colorSet(key)}
            activeDot={{ r: 8 }}
          />
        ))}
    </LineChart>
  );
};

export default Chart;
