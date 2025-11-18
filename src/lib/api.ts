import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3OGY2NTlmLWRhOTAtNDJmMC04Y2E4LWIwOWY1Mzc3OTUzZSIsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJpYXQiOjE3NjM0MjQyNTAsImV4cCI6MTc2MzQzMTQ1MH0.lP4FZKyvMgl-QaT-l7xqEgkxRmy61aetXW4dh12POdY";

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
