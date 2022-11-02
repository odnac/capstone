import Header from "./src/Header";
import Body from "./src/Body";
import "./src/Font.css";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { useState } from "react";
import { getPortableData } from "../api/portable";

const Index = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchCompany = searchParams.get("enterprise");

  const [currentCompany, setCurrentCompany] = useState({
    basDt: "",
    crno: "",
    dvdnBasDt: "",
    cashDvdnPayDt: "",
    isinCdNm: "",
    stckGenrDvdnAmt: "",
  });

  const [enterpriseList, setEnterPriseList] = useState([]);

  useQuery(
    ["enterprise", searchCompany],
    () => getPortableData({ company: searchCompany }),
    {
      onSuccess: (data) => {
        console.log(data);
        setEnterPriseList(data);
        setCurrentCompany(data[0]);
      },
    }
  );

  return (
    <div>
      <Header currentCompany={currentCompany} />
      <Body enterpriseList={enterpriseList} currentCompany={currentCompany} />
    </div>
  );
};

export default Index;
