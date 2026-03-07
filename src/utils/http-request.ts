import { axiosInstance } from "@/lib/api";

export const get = async (url: string, params = {}, headers = {}) => {
  const res = await axiosInstance.get(url, { params, headers });

  return res.data;
};

export const post = async (url: string, data = {}) => {
  const res = await axiosInstance.post(url, data);

  return res.data;
};
