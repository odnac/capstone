import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
const HistoryDivRate = ({ currentEnterprise, dividendData }) => {
  const labels = ["now-9M || now-3Y", "now-6M || now-2Y", "now-3M || now-1Y"];

  const dataA = {
    labels: labels,
    datasets: [
      {
        label: "배당률(%)",
        data: [
          dividendData.bpvtrOnskCashDvdnBnfRt,
          dividendData.pvtrOnskCashDvdnBnfRt,
          dividendData.crtmOnskCashDvdnBnfRt,
        ],
        fill: true,
        borderColor: "rgb(221,160,221)",
        tension: 0,
      },
      {
        label: "기준금리(%)",
        data: [2, 2, 2],
        fill: true,
        borderColor: "rgb(0,15,192)",
        tension: 0.5,
      },
    ],
  };

  /*
      로그인 시 테이블
  */
  function createData(name, now3M_now1Y, now6M_now2Y, now9M_now3Y) {
    return { name, now3M_now1Y, now6M_now2Y, now9M_now3Y };
  }

  const rows = [
    createData(
      "배당률",
      dividendData.bpvtrOnskCashDvdnBnfRt,
      dividendData.pvtrOnskCashDvdnBnfRt,
      dividendData.crtmOnskCashDvdnBnfRt
    ),
    createData("기준금리", 2, 2, 2),
  ];

  return (
    <>
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
                  <div className="cardstyle3">
                    {/* 차트 */}
                    <Line data={dataA} />
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

                  <div className="cardstyle">
                    <strong>어제 매수했다면 배당률이 얼마일까?</strong>
                    <br />
                    <br />
                    <p>
                      계산식 : 배당금 / 어제 종가 * 100
                      <br />
                      <strong> 값</strong>입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <DivInform currentEnterprise={currentEnterprise} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HistoryDivRate;
