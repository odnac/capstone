import { useState } from "react";
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
/*
  날짜랑 데이터 바꿔야 함
*/
const StockPriceChart = () => {
  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
    ],
    datasets: [
      {
        label: "검색한 기업",
        data: [65, 59, 80, 81, 56, 55, 40, 10, 150],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3,
      },
    ],
  });

  const onChange3M = (e) => {
    setData({
      labels: ["Jan", "Feb", "March"],
      datasets: [
        {
          label: "3개월 주가",
          data: [65, 59, 80],
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.3,
        },
      ],
    });
  };

  const onChange6M = (e) => {
    setData({
      labels: ["Jan", "Feb", "March", "April", "May", "Jun"],
      datasets: [
        {
          label: "6개월 주가",
          data: [65, 59, 80, 81, 56, 55],
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.3,
        },
      ],
    });
  };

  const onChange1Y = (e) => {
    setData({
      labels: [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "1년 주가",
          data: [65, 59, 80, 81, 56, 55, 90, 100, 109, 110, 111, 112],
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.3,
        },
      ],
    });
  };

  return (
    <div>
      <h1>주가 선 차트</h1>
      <Line data={data} />
      <button onClick={onChange3M}>3개월</button>
      <button onClick={onChange6M}>6개월</button>
      <button onClick={onChange1Y}>1년</button>
    </div>
  );
};

export default StockPriceChart;
