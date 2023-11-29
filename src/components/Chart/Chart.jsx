import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Chart = () => {
  return (
    <Line
      data={{
        labels: ["A", "B", "C", "D", "E", "F"],
        datasets: [
          {
            label: "Revenue",
            data: [200, 300, 400, 123, 232, 342],
          },
        ],
      }}
    />
  );
};
export default Chart;
