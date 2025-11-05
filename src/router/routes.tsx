import { createBrowserRouter } from "react-router-dom";

import { LoginPage, RegistrationPage } from "../pages/auth";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { GoalDetailPage } from "../pages/dashboard/GoalDetailPage";
import { NotFoundPage } from "../pages/not-found/NotFoundPage";
import { HomePage } from "../pages/home/HomePage";
import { MainLayaout } from "../layout/MainLayaout";

export const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegistrationPage /> },
  { path: "*", element: <NotFoundPage /> },

  {
    element: <MainLayaout />,
    children: [
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/goalDetails", element: <GoalDetailPage /> },
    ],
  },
]);
