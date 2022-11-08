import Header from "./src/Header";
import Body from "./src/Body";
import "./src/Font.css";
import { Navigate, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { getPortableData } from "../api/portable";
import dummyEnterprise from "../DUMMY_DATA/CompanyDATA.json";

const Index = () => {
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const searchEnterprise = searchParams.get("enterprise");

  const [currentEnterprise, setCurrentEnterprise] = useState({
    basDt: "",
    crno: "",
    dvdnBasDt: "",
    cashDvdnPayDt: "",
    isinCdNm: "",
    stckGenrDvdnAmt: "",
  });

  // useQuery(
  //   ["enterprise", searchEnterprise],
  //   () => getPortableData({ company: searchEnterprise }),
  //   {
  //     onSuccess: (data) => {
  //       console.log(data);
  //       setCurrentEnterprise(data);
  //     },
  //   }
  // );

  useEffect(() => {
    setCurrentEnterprise(dummyEnterprise);
  }, []);

  // if (!window.localStorage.getItem("token")) return <Navigate to="/" />;

  return (
    <div>
      <Header currentEnterprise={currentEnterprise} />
      <Body currentEnterprise={currentEnterprise} />
    </div>
  );
};

export default Index;
