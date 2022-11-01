import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
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
const HistoryDiv = () => {
  const [price, setPrice] = useState(0);

  const onChange = (e) => {
    setPrice(
      (e.target.value * 600).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    ); // '600'에 최근에 받은 배당금 넣어야 함.
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

  /*
      차트 로그인과 미로그인 데이터
  */
  const labels = [
    "now-9M || now-3Y",
    "now-6M || now-2Y",
    "now-3M || now-1Y",
    "now",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dividend",
        data: [300, 400, 500, 600],
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

  /*
      로그인 시 테이블
  */
  function createData(name, now, now3M_now1Y, now6M_now2Y, now9M_now3Y) {
    return { name, now, now3M_now1Y, now6M_now2Y, now9M_now3Y };
  }

  const rows = [createData("주당배당금", 300, 400, 500, 600)];

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
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-area me-1"></i>
                    배당금
                  </div>
                  <div className="card-body">
                    {/* 차트 */}
                    <PolarArea options={options} data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-area me-1"></i>
                    배당금
                  </div>
                  <div className="card-body">
                    <div className="cardstyle3">
                      {/* 차트 */}
                      <PolarArea options={options} data={data} />
                    </div>
                    {/* 테이블*/}
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
                    <div className="cardstyle2">
                      <div className="row">
                        <strong>받을 배당금 알아보기!</strong>
                        <br />
                        <div className="col-7">
                          <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="몇 주를 갖고있나요?"
                            onChange={onChange}
                          />
                        </div>
                        <div className="col-5"></div>
                        <br />
                        <br />
                        <p>
                          받으실 (세전)배당금은
                          <br />
                          <strong> {price}원</strong> 입니다. 여기 배당데이터
                          넣어야함!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default HistoryDiv;
