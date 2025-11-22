import type { LoginCredentials } from "../interfaces/auth-service.interface";
import { SessionStatus, useAuthStore, useUserStore } from "@/lib/storage";
import { useNavigate } from "react-router-dom";
import { onGetProfile, onLogIn, onLogOut } from "@/services/auth";

export const useAuth = () => {
  const { setAccessToken, setStatus, status } = useAuthStore();
  const { setUser, clearUser } = useUserStore();
  const navigate = useNavigate();

  const logIn = async (loginCredentials: LoginCredentials) => {
    const data = await onLogIn(loginCredentials);
    setAccessToken(data.access_token);

    if (data.access_token) {
      navigate("/goals");
      setStatus(SessionStatus.AUTHENTICATED);
      localStorage.setItem("authStatus", SessionStatus.AUTHENTICATED);
      getProfile();
    }
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

  return {
    logIn,
    setLoading,
    authStatus: status,
    logOut,
  };
};
