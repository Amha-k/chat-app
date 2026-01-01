// axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/chatapp",
  withCredentials: true, // For login, logout, checkAuth, update-profile
});

export const axiosPublicInstance = axios.create({
  baseURL: "http://localhost:5000/api/chatapp",
  withCredentials: false, // For signup, public endpoints
});
