import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// 과거 배당금
const HistoryDiv = ({ dividendData }) => {
  const [price, setPrice] = useState(0);

  const onChange = (e) => {
    setPrice(
      (e.target.value * dividendData.crtmOnskCashDvdnAmt)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const labels = ["3년 전", "2년 전", "1년 전"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dividend",
        data: [
          dividendData.bpvtrOnskCashDvdnAmt,
          dividendData.pvtrOnskCashDvdnAmt,
          dividendData.crtmOnskCashDvdnAmt,
        ], // [400, 500, 600], // [bpvtrOnskCashDvdnAmt ,pvtrOnskCashDvdnAmt ,crtmOnskCashDvdnAmt]
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="col-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-area me-1"></i>
                과거 배당금(￦)
              </div>
              <div className="card-body">
                <div className="cardstyle3">
                  {/* 차트 */}
                  <PolarArea options={options} data={data} />
                </div>
                {/* 테이블*/}
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">1년 전</TableCell>
                        <TableCell align="right">2년 전</TableCell>
                        <TableCell align="right">3년 전</TableCell>
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
                          주당배당금
                        </TableCell>

                        <TableCell align="right">
                          {numberWithCommas(dividendData.crtmOnskCashDvdnAmt)}
                        </TableCell>
                        <TableCell align="right">
                          {numberWithCommas(dividendData.pvtrOnskCashDvdnAmt)}
                        </TableCell>
                        <TableCell align="right">
                          {numberWithCommas(dividendData.bpvtrOnskCashDvdnAmt)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className="cardstyle2">
                  <div className="row">
                    <div className="cardstyle">
                      <strong>받을 배당금 알아보기!</strong>
                      <br />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="몇 주를 갖고있나요?"
                        onChange={onChange}
                      />
                      <p>
                        받으실 (세전)배당금은
                        <br />
                        <strong> {price}원</strong> 입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HistoryDiv;
