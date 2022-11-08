import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dummyPrice from "../../../../DUMMY_DATA/priceData.json";
import { useEffect, useState } from "react";
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
// 주가
const StockPriceChart = () => {
  const [priceData, setPriceData] = useState([]);
  const [priceList, setPriceList] = useState([]);
  const [sortedPriceList, setSortedPriceList] = useState();

  const [data, setData] = useState({
    labels: [
      "now-8M",
      "now-7M",
      "now-6M",
      "now-5M",
      "now-4M",
      "now-3M",
      "now-2M",
      "now-1M",
      "now",
    ],
    datasets: [
      {
        label: "검색한 기업",
        // data: [2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
        // data: sortedPriceList.slice(3, 12),
        data: [],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3,
      },
    ],
  });

  const onChange3M = () => {
    setData({
      labels: ["now-2M", "now-1M", "now"],
      datasets: [
        {
          label: "최근 3개월 주가",
          data: [...sortedPriceList].splice(9, 12),
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.3,
        },
      ],
    });
  };

  const onChange6M = (e) => {
    setData({
      labels: ["now-5M", "now-4M", "now-3M", "now-2M", "now-1M", "now"],
      datasets: [
        {
          label: "최근 6개월 주가",
          data: [...sortedPriceList].splice(6, 12), //[90, 100, 109, 110, 111, 112],
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.3,
        },
      ],
    });
  };

  const onChange9M = (e) => {
    setData({
      labels: [
        "now-8M",
        "now-7M",
        "now-6M",
        "now-5M",
        "now-4M",
        "now-3M",
        "now-2M",
        "now-1M",
        "now",
      ],
      datasets: [
        {
          label: "최근 9개월 주가",
          data: [...sortedPriceList].splice(3, 12), //[81, 56, 55, 90, 100, 109, 110, 111, 112],
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
        "now-111M",
        "now-10M",
        "now-9M",
        "now-8M",
        "now-7M",
        "now-6M",
        "now-5M",
        "now-4M",
        "now-3M",
        "now-2M",
        "now-1M",
        "now",
      ],
      datasets: [
        {
          label: "최근 1년 주가",
          data: sortedPriceList, //[65, 59, 80, 81, 56, 55, 90, 100, 109, 110, 111, 112],
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.3,
        },
      ],
    });
  };

  const createPriceList = (priceData) => {
    let priceArr = [];
    priceData.map((data) => priceArr.push(data.clpr));
    setPriceList(priceArr);
  };

  const createSortedPriceList = (priceData) => {
    const sortedPriceData = [...priceData].sort((a, b) => {
      return a.basDt - b.basDt;
    });
    let sortedPriceArr = [];
    sortedPriceData.map((data) => sortedPriceArr.push(data.clpr));
    setSortedPriceList(sortedPriceArr);
  };

  useEffect(() => {
    setPriceData(dummyPrice);
    createPriceList(priceData);
    createSortedPriceList(priceData);
  }, [dummyPrice, priceData]);

  // const numberWithCommas = (num) => {
  //   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };

  return (
    <div className="col-lg-7">
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-chart-area me-1"></i>
          주가 차트
        </div>
        <div className="card-body">
          <div className="cardstyle">
            {/* 차트 */}
            <Line data={data} />
            <button className="btn btn-outline-primary" onClick={onChange3M}>
              3M
            </button>
            <button className="btn btn-outline-primary" onClick={onChange6M}>
              6M
            </button>
            <button className="btn btn-outline-primary" onClick={onChange9M}>
              9M
            </button>
            <button className="btn btn-outline-primary" onClick={onChange1Y}>
              1Y
            </button>

            <br />
            <br />
            {/* 테이블*/}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right">now</TableCell>
                    <TableCell align="right">now-1M</TableCell>
                    <TableCell align="right">now-2M</TableCell>
                    <TableCell align="right">now-3M</TableCell>
                    <TableCell align="right">now-4M</TableCell>
                    <TableCell align="right">now-5M</TableCell>
                    <TableCell align="right">now-6M</TableCell>
                    <TableCell align="right">now-7M</TableCell>
                    <TableCell align="right">now-8M</TableCell>
                    <TableCell align="right">now-9M</TableCell>
                    <TableCell align="right">now-10M</TableCell>
                    <TableCell align="right">now-11M</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      주가
                    </TableCell>
                    <TableCell align="right">{priceList[0]}</TableCell>
                    <TableCell align="right">{priceList[1]}</TableCell>
                    <TableCell align="right">{priceList[2]}</TableCell>
                    <TableCell align="right">{priceList[3]}</TableCell>
                    <TableCell align="right">{priceList[4]}</TableCell>
                    <TableCell align="right">{priceList[5]}</TableCell>
                    <TableCell align="right">{priceList[6]}</TableCell>
                    <TableCell align="right">{priceList[7]}</TableCell>
                    <TableCell align="right">{priceList[8]}</TableCell>
                    <TableCell align="right">{priceList[9]}</TableCell>
                    <TableCell align="right">{priceList[10]}</TableCell>
                    <TableCell align="right">{priceList[11]}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StockPriceChart;
