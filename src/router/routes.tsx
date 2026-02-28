import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegistrationPage } from "../pages/auth";
import { HomePage } from "../pages/home/HomePage";
import { MainLayaout } from "../layout/MainLayaout";
import { PublicLayout } from "@/layout/PublicLayout";
import { GoalDetailPage, GoalsPage, DocumentationPage } from "@/pages/goals";
import { SessionStatus } from "@/lib/storage";
import { useAuth } from "@/pages/auth/hooks/useAuth";
import { PrivateRoute } from "./components/PrivateRouter";
import { VerifyAccount } from "@/pages/auth/VerifyAccount";

export const AppRoutes = () => {
  const { authStatus } = useAuth();

  return (
    <Routes>
      {authStatus === SessionStatus.AUTHENTICATED ? (
        <>
          <Route element={<MainLayaout />}>
            <Route index path="/goals" element={<GoalsPage />} />
            <Route path="/goal-details/:id" element={<GoalDetailPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/goals" replace />} />
        </>
      ) : (
        <>
          <Route element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route
              path="/verify-account/:token"
              element={
                <PrivateRoute>
                  <VerifyAccount />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  );
};
