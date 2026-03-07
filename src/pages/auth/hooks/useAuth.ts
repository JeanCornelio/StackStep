import type { LoginCredentials } from "../interfaces/auth-service.interface";
import { SessionStatus, useAuthStore, useUserStore } from "@/lib/storage";
import { useNavigate } from "react-router-dom";
import {
  onAuthWithGithub,
  onGetProfile,
  onLogIn,
  onLogOut,
} from "@/services/auth";
import { toast } from "sonner";
import type { AxiosError } from "axios";

export const useAuth = () => {
  const { setAccessToken, setStatus, status } = useAuthStore();
  const { setUser, clearUser } = useUserStore();
  const navigate = useNavigate();

  const logIn = async (loginCredentials: LoginCredentials) => {
    const { access_token } = await onLogIn(loginCredentials);
    setAuthenticated(access_token);
  };

  const logOut = async () => {
    await onLogOut();
    setAccessToken("");
    clearUser();
    setStatus(SessionStatus.UNAUTHENTICATED);
    localStorage.setItem("authStatus", SessionStatus.UNAUTHENTICATED);
    navigate("/login");
  };

  const getProfile = async () => {
    const { user } = await onGetProfile();
    const { id, username, email, avatarUrl } = user;

    setUser({
      id,
      username,
      email,
      avatarUrl,
    });
  };

  const setLoading = () => {
    setStatus(SessionStatus.LOADING);
  };

  const setUnauthenticated = () => {
    setStatus(SessionStatus.UNAUTHENTICATED);
  };

  const setAuthenticated = (accessToken: string) => {
    setLoading();
    try {
      setAccessToken(accessToken);

      if (accessToken) {
        navigate("/goals");
        setStatus(SessionStatus.AUTHENTICATED);
        localStorage.setItem("authStatus", SessionStatus.AUTHENTICATED);
        getProfile();
      }
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;

      toast.warning(
        typeof err === "string"
          ? err
          : err?.response?.data?.message || "Login failed. Please try again.",
      );
      setUnauthenticated();
    }
  };

  const loginWithGithub = () => onAuthWithGithub();

  return {
    logIn,
    setLoading,
    authStatus: status,
    logOut,
    setAuthenticated,
    setUnauthenticated,
    loginWithGithub,
  };
};
