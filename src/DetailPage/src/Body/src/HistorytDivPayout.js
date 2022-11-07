import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Multitype from "./Multitype";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// 과거 배당 성향
const HistorytDivPayout = ({ dividendData }) => {
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

  const labels = ["now-9M || now-3Y", "now-6M || now-2Y", "'now-3M || now-1Y'"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "배당성향(%)",
        data: [
          dividendData.bpvtrCashDvdnTndnCtt,
          dividendData.pvtrCashDvdnTndnCtt,
          dividendData.crtmCashDvdnTndnCtt,
        ],
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

  function createData(name, now3M_now1Y, now6M_now2Y, now9M_now3Y) {
    return { name, now3M_now1Y, now6M_now2Y, now9M_now3Y };
  }

  const rows = [
    createData(
      "배당성향",
      dividendData.bpvtrCashDvdnTndnCtt,
      dividendData.pvtrCashDvdnTndnCtt,
      dividendData.crtmCashDvdnTndnCtt
    ),
  ]; // bpvtrCashDvdnTndnCtt, pvtrCashDvdnTndnCtt, crtmCashDvdnTndnCtt

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-area me-1"></i>
                  배당성향(%)
                </div>
                <div className="card-body">
                  <div className="cardstyle3">
                    {/* 차트 */}
                    <Bar options={options} data={data} />
                  </div>
                  {/* 테이블 */}
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell align="right">now-3M || now-1Y</TableCell>
                          <TableCell align="right">now-6M || now-2Y</TableCell>
                          <TableCell align="right">now-9M || now-3Y</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">
                              {row.now9M_now3Y}
                            </TableCell>
                            <TableCell align="right">
                              {row.now6M_now2Y}
                            </TableCell>
                            <TableCell align="right">
                              {row.now3M_now1Y}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {/* 배당성향이란 무엇일까? */}
                  <p>
                    배당성향이란 무엇일까? - 0~30% 성장기업, 50%~ 성숙기업 설명
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Multitype />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HistorytDivPayout;
