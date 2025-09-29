import { use } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const AxiosMarksChart = ({ marksPromise }) => {
  const result = use(marksPromise);
  const marksData = result.data;

  const chartData = marksData.map((data) => {
    const { id, name, marks } = data;
    const flattenedData = { id, name, ...marks };
    flattenedData.avg = (
      (marks.physics + marks.chemistry + marks.mathematics) /
      3
    ).toFixed(2);

    return flattenedData;
  });

  console.log(chartData);

  return (
    <div className="container mx-auto my-20 flex justify-center">
      <BarChart width={1000} height={400} data={chartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="physics" fill="red"></Bar>
        <Bar dataKey="chemistry" fill="green"></Bar>
        <Bar dataKey="mathematics" fill="blue"></Bar>
        <Bar dataKey="avg" fill="orange"></Bar>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </BarChart>
    </div>
  );
};

export default AxiosMarksChart;
