import * as React from "react";
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
import HistoryDiv from "./HistoryDiv";

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
  /*
      차트 미로그인 데이터
  */
  const labels = [
    "now-8M",
    "now-7M",
    "now-6M",
    "now-5M",
    "now-4M",
    "now-3M",
    "now-2M",
    "now-1M",
    "now",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "최근 9개월 주가",
        data: [81, 56, 55, 90, 100, 109, 110, 111, 112],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3,
      },
    ],
  };

  /*
      차트 로그인 데이터 - 기간추가 버튼
  */
  const [dataA, setDataA] = useState({
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
        data: [81, 56, 55, 90, 100, 109, 110, 111, 112],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3,
      },
    ],
  });

  const onChange3M = (e) => {
    setDataA({
      labels: ["now-2M", "now-1M", "now"],
      datasets: [
        {
          label: "최근 3개월 주가",
          data: [110, 111, 112],
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.3,
        },
      ],
    });
  };

  const onChange6M = (e) => {
    setDataA({
      labels: ["now-5M", "now-4M", "now-3M", "now-2M", "now-1M", "now"],
      datasets: [
        {
          label: "최근 6개월 주가",
          data: [90, 100, 109, 110, 111, 112],
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.3,
        },
      ],
    });
  };

  const onChange9M = (e) => {
    setDataA({
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
          data: [81, 56, 55, 90, 100, 109, 110, 111, 112],
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.3,
        },
      ],
    });
  };

  const onChange1Y = (e) => {
    setDataA({
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
          data: [65, 59, 80, 81, 56, 55, 90, 100, 109, 110, 111, 112],
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.3,
        },
      ],
    });
  };

  /*
      테이블 주가 데이터
  */
  function createData(
    name,
    now,
    now1,
    now2,
    now3,
    now4,
    now5,
    now6,
    now7,
    now8,
    now9,
    now10,
    now11
  ) {
    return {
      name,
      now,
      now1,
      now2,
      now3,
      now4,
      now5,
      now6,
      now7,
      now8,
      now9,
      now10,
      now11,
    };
  }

  // 데이터 역순으로 해야 표가 잘 나옴
  const rows = [
    createData("주가", 112, 111, 110, 109, 100, 90, 55, 56, 81, 80, 59, 65),
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
              <div className="col-lg-7">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-area me-1"></i>
                    주가 선 차트
                  </div>
                  <div className="card-body">
                    {/* 차트 */}
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
      ) : (
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
                    <div className="cardstyle">
                      {/* 차트 */}
                      <Line data={dataA} />
                      {/* 차트 버튼 */}
                      <button
                        className="btn btn-outline-primary"
                        onClick={onChange3M}
                      >
                        3M
                      </button>
                      <button
                        className="btn btn-outline-primary"
                        onClick={onChange6M}
                      >
                        6M
                      </button>
                      <button
                        className="btn btn-outline-primary"
                        onClick={onChange9M}
                      >
                        9M
                      </button>
                      <button
                        className="btn btn-outline-primary"
                        onClick={onChange1Y}
                      >
                        1Y
                      </button>
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
                                <TableCell align="right">{row.now}</TableCell>
                                <TableCell align="right">{row.now1}</TableCell>
                                <TableCell align="right">{row.now2}</TableCell>
                                <TableCell align="right">{row.now3}</TableCell>
                                <TableCell align="right">{row.now4}</TableCell>
                                <TableCell align="right">{row.now5}</TableCell>
                                <TableCell align="right">{row.now6}</TableCell>
                                <TableCell align="right">{row.now7}</TableCell>
                                <TableCell align="right">{row.now8}</TableCell>
                                <TableCell align="right">{row.now9}</TableCell>
                                <TableCell align="right">{row.now10}</TableCell>
                                <TableCell align="right">{row.now11}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <HistoryDiv />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default StockPriceChart;
