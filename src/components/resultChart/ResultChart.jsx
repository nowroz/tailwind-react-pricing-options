import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const getStudentsResult = async (setter) => {
  const response = await fetch("./student-results.json");
  const result = await response.json();

  setter(result);
};

const ResultChart = () => {
  const [studentsResult, setStudentsResult] = useState([]);

  useEffect(() => {
    getStudentsResult(setStudentsResult);
  }, []);

  return (
    <div className="container mx-auto my-10">
      <LineChart width={800} height={300} data={studentsResult}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="physics"></Line>
        <Line dataKey="chemistry" stroke="red"></Line>
        <Line dataKey="mathematics" stroke="green"></Line>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </LineChart>
    </div>
  );
};

export default ResultChart;
