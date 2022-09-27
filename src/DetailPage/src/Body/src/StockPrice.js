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

import HistoryDiv from "./HistoryDiv";
import { width } from "@mui/system";

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
// 주가
const StockPriceChart = () => {
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
        label: "검색한 기업",
        data: [65, 59, 80, 81, 56, 55, 40, 10, 150],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.5,
      },
      {
        label: "비교 기업",
        data: [15, 37, 75, 55, 90, 90, 90, 150, 60],
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
          <div className="col-lg-7">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-area me-1"></i>
                주가 선 차트
              </div>
              <div className="card-body">
                <Line data={data} />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <HistoryDiv />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StockPriceChart;
