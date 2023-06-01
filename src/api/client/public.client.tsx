import axios, { AxiosRequestConfig } from "axios";

const baseURL = "https://api.themoviedb.org/3";

const PublicClient = axios.create({ baseURL: baseURL });

PublicClient.interceptors.request.use(async (config) => {
  config.headers.setContentType("application/json; charset=utf-8");
  config.headers.setAuthorization(`Authorization: ${import.meta.env.VITE_SECRET_KEY}`);
  return config;
});

PublicClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    throw err;
  }
);

export default PublicClient;
