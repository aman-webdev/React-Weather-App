import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Graph = ({ temp }) => {
  const data = {
    labels: [
      "9:00 ",
      "12:00 ",
      "15:00 ",
      "18:00",
      "24:00",
      "3:00",
      "6:00",
      "9:00",
    ],
    datasets: [
      {
        label: "Temperature",
        data: temp,
        borderColor: ["rgba(255,206,86,1)"],
        backgroundColor: ["rgba(255,206,86,1)"],
        pointBackgroundColor: ["rgba(255,206,86,.4)"],
        pointBorderColor: ["rgba(255,206,86,.4)"],
      },
    ],
  };
  return (
    <div className="graph-container">
      <Line data={data} />
    </div>
  );
};

export default Graph;
