import type {
  AccountCredentials,
  LoginCredentials,
} from "@/pages/auth/interfaces/auth-service.interface";
import { get, post } from "@/utils/http-request";

export const refreshToken = () => {
  return post("auth/refresh");
};

export const onLogIn = async (loginCredentials: LoginCredentials) => {
  const { data } = await post("auth/login", loginCredentials);

  return data;
};

export const createAccount = async (accountCredentials: AccountCredentials) => {
  const { data } = await post("auth/register", accountCredentials);

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

export const onActiveAccount = async (token: string | undefined) => {
  const { data } = await get(`auth/active-account/${token}`);

  return data;
};
