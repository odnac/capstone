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
  const labels = ["3년 전", "2년 전", "1년 전"];

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
        data: [1.25, 0.5, 0.75],
        fill: true,
        borderColor: "rgb(0,15,192)",
        tension: 0,
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
    createData("기준금리", 1.25, 0.5, 0.75),
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
                  과거 배당률(%)
                </div>
                <div className="card-body">
                  <div className="cardstyle3">
                    {/* 차트 */}
                    <Line data={dataA} />
                  </div>
                  {/* 테이블 */}
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
                              {row.now9M_now3Y}%
                            </TableCell>
                            <TableCell align="right">
                              {row.now6M_now2Y}%
                            </TableCell>
                            <TableCell align="right">
                              {row.now3M_now1Y}%
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <div className="cardstyle">
                    <strong>72의 법칙!</strong>
                    <br />
                    <br />
                    <p>
                      배당률로 원금이 2배가 되는 시간을 알 수 있어요!
                      <br />
                      <strong>
                        72 / {dividendData.crtmOnskCashDvdnBnfRt} ={" "}
                        {72 / dividendData.crtmOnskCashDvdnBnfRt}년
                      </strong>
                      이 걸려요ㅜㅜ
                      <br />
                      <br />
                      너무 오래 걸려도 걱정마세요! 주가가 올라갈 수 있어요.
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
