import axios from "axios";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

const baseURL = `${process.env.REACT_APP_DOMAIN}`;

const axiosInstance = axios.create({
  baseURL,
});

const getVisitorId = async () => {
  const fp = await FingerprintJS.load();
  const { visitorId } = await fp.get();
  return visitorId;
};

axiosInstance.interceptors.request.use(async (config) => {
  document.getElementById("loader").classList.add("loadContainer");

  config.headers = {
    "content-type": "application/json",
    terminalId: await getVisitorId(),
    ...config.headers,
  };
  return config;
});

axiosInstance.interceptors.response.use(
  async (response) => {
    document.getElementById("loader").classList.remove("loadContainer");
    return response;
  },
  async (error) => {
    document.getElementById("loader").classList.remove("loadContainer");
    return Promise.reject(error);
  }
);

export { axiosInstance };
