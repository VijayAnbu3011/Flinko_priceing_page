import axios from "axios";

const baseURL = `${process.env.REACT_APP_DOMAIN}`;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(async (config) => {
  config.headers = {
    "content-type": "application/json",
    ...config.headers,
  };
  return config;
});

export { axiosInstance };
