import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
// 배당률
const HistoryDivRate = () => {
  const labels = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "배당률",
        data: [65, 59, 80, 81, 56, 55, 40, 10, 150],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.5,
      },
      {
        label: "기준금리",
        data: [15, 37, 75, 55, 90, 90, 90, 150, 60],
        fill: true,
        borderColor: "rgb(0,15,192)",
        tension: 0.5,
      },
    ],
  };

  return (
    <div>
      <h1>배당률</h1>
      <Line data={data} />
    </div>
  );
};
export default HistoryDivRate;
