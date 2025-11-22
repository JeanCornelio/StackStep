import axios from "axios";
import { useAuthStore, useUserStore } from "./storage";
import { onGetProfile, refreshToken } from "@/services/auth";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000,
  withCredentials: true,
});

// REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const setUserProfile = useUserStore.getState().setUser;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await refreshToken();

        // Guarda token en Zustand
        useAuthStore.getState().setAccessToken(data.access_token);

        const { user } = await onGetProfile();
        const { id, username, email, avatarUrl } = user;

        setUserProfile({
          id,
          username,
          email,
          avatarUrl,
        });

        return axiosInstance(originalRequest);
      } catch (err) {
        localStorage.clear();
        window.location.href = "/login";
        console.error("Refresh token failed:", err);
      }
    }

    return Promise.reject(error);
  }
);
