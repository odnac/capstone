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

import DivInform from "./DivInform";

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
        label: "배당률(%)",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.5,
      },
      {
        label: "기준금리(%)",
        data: [2, 2, 2, 3, 3, 3, 3.5, 3.5, 4],
        fill: true,
        borderColor: "rgb(0,15,192)",
        tension: 0.5,
      },
    ],
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-area me-1"></i>
                배당률(%)
              </div>
              <div className="card-body">
                <Line data={data} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <DivInform />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HistoryDivRate;
