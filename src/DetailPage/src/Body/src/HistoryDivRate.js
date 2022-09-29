import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
  /*
      차트 라벨 로그인,미로그인 공동
  */
  const labels = [
    "now-9M || now-3Y",
    "now-6M || now-2Y",
    "now-3M || now-1Y",
    "now",
  ];

  /*
      차트 미로그인 데이터
  */
  const data = {
    labels: labels,
    datasets: [
      {
        label: "배당률(%)",
        data: [1.5, 2.5, 3, 3.5],
        fill: true,
        borderColor: "rgb(221,160,221)",
        tension: 0,
      },
    ],
  };

  /*
      차트 로그인 데이터
  */
  const dataA = {
    labels: labels,
    datasets: [
      {
        label: "배당률(%)",
        data: [1.5, 2.5, 3, 3.5],
        fill: true,
        borderColor: "rgb(221,160,221)",
        tension: 0,
      },
      {
        label: "기준금리(%)",
        data: [2, 2, 2, 2],
        fill: true,
        borderColor: "rgb(0,15,192)",
        tension: 0.5,
      },
    ],
  };

  /*
      로그인 시 테이블
  */
  function createData(name, now, now3M_now1Y, now6M_now2Y, now9M_now3Y) {
    return { name, now, now3M_now1Y, now6M_now2Y, now9M_now3Y };
  }

  const rows = [
    createData("배당률", 1.5, 2.5, 3, 3.5),
    createData("기준금리", 2, 2, 2, 2),
  ];

  /*
      로그인한지 안한지 체크
      userId로 확인
  */
  const [userId, setUserId] = useState();
  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      console.log(data);
      // setNickName(data.properties.nickname);
      // setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (userId) {
      console.log("userId: ", userId);
      // alert('success login', userId);
    }
  }, [userId]);

  return (
    <>
      {!userId ? (
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
                    {/* 차트 */}
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
      ) : (
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
                            <TableCell align="right">now</TableCell>
                            <TableCell align="right">
                              now-3M || now-1Y
                            </TableCell>
                            <TableCell align="right">
                              now-6M || now-2Y
                            </TableCell>
                            <TableCell align="right">
                              now-9M || now-3Y
                            </TableCell>
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
                              <TableCell align="right">{row.now}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>

                    <div className="cardstyle">
                      <p>
                        <strong>"값"</strong>입니다.
                      </p>
                    </div>

                    {/* 어제 샀으면 배당률 얼마일까? */}
                    <p>
                      어제 샀으면 배당률이 얼마일까? - 전날 종가를 기준으로
                      배당률 계산해주기
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <DivInform />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default HistoryDivRate;
