import Header from "./src/Header";
import Body from "./src/Body";
import "./src/Font.css";
import { Navigate, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { useState } from "react";
import { getPortableData } from "../api/portable";

const Index = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchEnterprise = searchParams.get("enterprise");

  const [hearts, setheart] = useState();
  const [currentEnterprise, setCurrentEnterprise] = useState({
    basDt: "",
    crno: "",
    dvdnBasDt: "",
    cashDvdnPayDt: "",
    isinCdNm: "",
    stckGenrDvdnAmt: "",
  });

  useQuery(
    ["enterprise", searchEnterprise],
    () => getPortableData({ company: searchEnterprise }),
    {
      onSuccess: (data) => {
        console.log(data);
        setCurrentEnterprise(data);
      },
    }
  );

  if (!window.localStorage.getItem("token")) return <Navigate to="/" />;

  return (
    <div>
      <Header currentEnterprise={currentEnterprise} hearts={hearts} />
      <Body
        currentEnterprise={currentEnterprise}
        hearts={hearts}
        setheart={setheart}
      />
    </div>
  );
};

export default Index;
