import axios from "axios";
import { API_BASE_URL } from "../constants/index";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// api.axiosInstance.interceptors.request.use(
//   async (config: any) => {
//     const value = await AsyncStorage.getItem("@accessToken");

//     if (value) {
//       config.headers.Authorization = `Bearer ${value}`;
//     }
//     return config;
//   },
//   (error: any) => {
//     return Promise.reject(error);
//   }
// );

export default api;
