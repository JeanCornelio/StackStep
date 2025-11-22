import type { LoginCredentials } from "@/pages/auth/interfaces/auth-service.interface";
import { get, post } from "@/utils/http-request";

export const refreshToken = () => {
  return post("auth/refresh");
};

export const onLogIn = async (loginCredentials: LoginCredentials) => {
  const { data } = await post("auth/login", loginCredentials);

  return data;
};

export const onLogOut = async () => {
  const { data } = await post("auth/logout");

  return data;
};

export const onGetProfile = async () => {
  const { data } = await get("auth/profile");

  return data;
};
