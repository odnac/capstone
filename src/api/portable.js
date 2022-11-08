import http from "./http";

export const getPortableData = ({ company }) =>
  http.get(`/lastest?enterprise=${company}`).then((res) => res.data);

export const getEnterprisePriceList = ({ enterpriseName }) =>
  http
    .get(`/lastest/StockSecuritiesInfo?itmsNm=${enterpriseName}`)
    .then((res) => res.data);

export const getEnterpriseDividend = ({ enterpriseId }) =>
  http.get(`/lastest/disinfo?crno=${enterpriseId}`).then((res) => res.data);
