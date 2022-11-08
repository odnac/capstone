import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const Multitype = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels,
    datasets: [
      {
        type: "bar",
        label: "배당금",
        backgroundColor: "rgb(255, 159, 64)",
        data: [15, 25, 35, 45, 55, 65],
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "line",
        label: "배당률",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 2,
        fill: false,
        data: [60, 30, 20, 50, 40, 10],
      },
      {
        type: "bar",
        label: "배당성향",
        backgroundColor: "rgb(54, 162, 235)",
        data: [12, 22, 32, 42, 52, 62],
      },
    ],
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-area me-1"></i>
                혼합
              </div>
              <div className="card-body">
                <Chart type="bar" data={data} />
                <p>zzzzzzzzzzz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multitype;
