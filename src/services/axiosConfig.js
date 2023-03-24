import axios from "axios";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

// const baseURL = `${process.env.REACT_APP_DOMAIN}`;
const baseURL = `http://10.10.20.255:9191/api/v1/`;

const axiosInstance = axios.create({
  baseURL,
});

const getVisitorId = async () => {
  const fp = await FingerprintJS.load();
  const { visitorId } = await fp.get();
  return visitorId;
};

axiosInstance.interceptors.request.use(async (config) => {
  config.headers = {
    "content-type": "application/json",
    terminalId: await getVisitorId(),
    ...config.headers,
  };
  return config;
});

export { axiosInstance };
