import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3OGY2NTlmLWRhOTAtNDJmMC04Y2E4LWIwOWY1Mzc3OTUzZSIsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJpYXQiOjE3NjM1MTU1MzgsImV4cCI6MTc2MzUyMjczOH0._baZn179NlY9G-1CET3OeMcf4fTmjlpL_wfGUL7YEaA";

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
