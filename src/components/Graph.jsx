import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", Negative: 300, Positive: 456 },
  { name: "2", Negative: -145, Positive: 230 },
  { name: "3", Negative: -100, Positive: 345 },
  { name: "4", Negative: -8, Positive: 450 },
  { name: "5", Negative: 100, Positive: 321 },
  { name: "6", Negative: 9, Positive: 235 },
  { name: "7", Negative: 53, Positive: 267 },
  { name: "8", Negative: 252, Positive: -378 },
  { name: "9", Negative: 79, Positive: -210 },
  { name: "10", Negative: 294, Positive: -23 },
  { name: "12", Negative: 43, Positive: 45 },
  { name: "13", Negative: -74, Positive: 90 },
  { name: "14", Negative: -71, Positive: 130 },
  { name: "15", Negative: -117, Positive: 11 },
  { name: "16", Negative: -186, Positive: 107 },
  { name: "17", Negative: -16, Positive: 926 },

  { name: "39", Negative: -66, Positive: 154 },
  { name: "40", Negative: -50, Positive: 186 },
  { name: "5", Negative: 100, Positive: 321 },
  { name: "6", Negative: 9, Positive: 235 },
  { name: "7", Negative: 53, Positive: 267 },
  { name: "8", Negative: 252, Positive: -378 },
  { name: "9", Negative: 79, Positive: -210 },
  { name: "10", Negative: 294, Positive: -23 },
  { name: "12", Negative: 43, Positive: 45 },
  { name: "13", Negative: -74, Positive: 90 },
  { name: "14", Negative: -71, Positive: 130 },
  { name: "15", Negative: -117, Positive: 11 },
  { name: "16", Negative: -186, Positive: 107 },
  { name: "17", Negative: -16, Positive: 926 },
  { name: "18", Negative: -125, Positive: 653 },
  { name: "19", Negative: 222, Positive: 366 },
  { name: "20", Negative: 372, Positive: 486 },
  { name: "21", Negative: 182, Positive: 512 },
  { name: "22", Negative: 164, Positive: 302 },
  { name: "23", Negative: 316, Positive: 425 },
  { name: "24", Negative: 131, Positive: 467 },
  { name: "25", Negative: 291, Positive: -190 },
  { name: "26", Negative: -47, Positive: 194 },
  { name: "27", Negative: -415, Positive: 371 },
  { name: "28", Negative: -182, Positive: 376 },
  { name: "29", Negative: -93, Positive: 295 },
  { name: "30", Negative: -99, Positive: 322 },
  { name: "31", Negative: -52, Positive: 246 },
  { name: "32", Negative: 154, Positive: 33 },
  { name: "33", Negative: 205, Positive: 354 },
  { name: "34", Negative: 70, Positive: 258 },
  { name: "35", Negative: -25, Positive: 359 },
  { name: "36", Negative: -59, Positive: 192 },
  { name: "37", Negative: -63, Positive: 464 },
  { name: "38", Negative: -91, Positive: -2 },
  { name: "39", Negative: -66, Positive: 154 },
  { name: "40", Negative: -50, Positive: 186 },
];

export default class Graph extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/bar-chart-with-brush-ghsz3";

  render() {
    return (
      <ResponsiveContainer width="100%" minHeight={550} height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "20px" }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={0} stroke="#8884d8" />
          <Bar dataKey="Positive" fill="#437259" />
          <Bar dataKey="Negative" fill="#7C323A" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
