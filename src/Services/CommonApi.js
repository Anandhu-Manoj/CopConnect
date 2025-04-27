import axios from "axios";
import baseUrl from "./baseUrl";

const commonApi = async (httpmethod, endpoint, requestbody,requestHeader) => {
  const reqConfig = {
    method: httpmethod,
    url: baseUrl + endpoint,
    data: requestbody,
    headers:requestHeader?requestHeader:{"Content-Type":"application/json"}
  };
  return await axios(reqConfig)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
};

export default commonApi
