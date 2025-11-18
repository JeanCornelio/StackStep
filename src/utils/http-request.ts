import { axiosInstance } from "@/lib/api";

export const get = async (url: string, params = {}) => {
  const res = await axiosInstance.get(url, { params });

  return res.data;
};

export const post = async (url: string, data = {}) => {
  const res = await axiosInstance.post(url, data);

  return res.data;
};
