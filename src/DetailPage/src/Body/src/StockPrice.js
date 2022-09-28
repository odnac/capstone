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
import { width } from "@mui/system";

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
      미 로그인 데이터
  */
  const labels = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "검색한 기업",
        data: [65, 59, 80, 81, 56, 55, 40, 10, 150],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.5,
      },
    ],
  };

  /*
      로그인 데이터 - 기간추가 버튼
  */
  const [dataA, setDataA] = useState({
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
    setDataA({
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
    setDataA({
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
    setDataA({
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
      alert("success login", userId);
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
                    <Line data={dataA} />
                    <button onClick={onChange3M}>3개월</button>
                    <button onClick={onChange6M}>6개월</button>
                    <button onClick={onChange1Y}>1년</button>
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
