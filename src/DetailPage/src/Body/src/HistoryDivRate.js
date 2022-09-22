import { Line } from 'react-chartjs-2';
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
} from 'chart.js';

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
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: '배당률(%)',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.5,
      },
      {
        label: '기준금리(%)',
        data: [2, 2, 2, 3, 3, 3, 3.5, 3.5, 4],
        fill: true,
        borderColor: 'rgb(0,15,192)',
        tension: 0.5,
      },
    ],
  };

  return (
    <div>
      <h1>배당률(%)</h1>
      <Line data={data} />
    </div>
  );
};
export default HistoryDivRate;
