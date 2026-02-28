import { create } from "zustand";

type sessionState = "loading" | "authenticated" | "unauthenticated";

const getAuthStatus = (): sessionState | null => {
  const storedStatus = localStorage.getItem("authStatus");
  return storedStatus as sessionState | null;
};

export const SessionStatus = {
  LOADING: "loading",
  AUTHENTICATED: "authenticated",
  UNAUTHENTICATED: "unauthenticated",
} as const;

interface AuthState {
  accessToken: string;
  status: sessionState;
  setAccessToken: (token: string) => void;
  setStatus: (status: sessionState) => void;
}

interface UserState {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
  setUser: (user: Partial<UserState>) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: "",
  status: getAuthStatus() || SessionStatus.UNAUTHENTICATED,
  setAccessToken: (token: string) => set({ accessToken: token }),
  setStatus: (status: sessionState) => set({ status }),
}));

export const useUserStore = create<UserState>((set) => ({
  id: "",
  username: "",
  email: "",
  avatarUrl: "",
  setUser: (user: Partial<UserState>) =>
    set((state) => ({
      ...state,
      ...user,
    })),
  clearUser: () =>
    set({
      id: "",
      username: "",
      email: "",
      avatarUrl: "",
    }),
}));
