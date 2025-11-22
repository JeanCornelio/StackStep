import { SessionStatus } from "@/lib/storage";
import { useAuth } from "@/pages/auth/hooks/useAuth";
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { authStatus } = useAuth();

  const isAuthenticated = authStatus === SessionStatus.AUTHENTICATED;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  

  return children;
};
