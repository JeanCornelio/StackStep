import { createBrowserRouter } from "react-router-dom";

import { LoginPage, RegistrationPage } from "../pages/auth";

import { NotFoundPage } from "../pages/not-found/NotFoundPage";
import { HomePage } from "../pages/home/HomePage";
import { MainLayaout } from "../layout/MainLayaout";
import { PublicLayout } from "@/layout/PublicLayout";

import { GoalDetailPage, GoalsPage, DocumentationPage } from "@/pages/dashboard";


export const routes = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegistrationPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },

  {
    element: <MainLayaout />,
    children: [
      { path: "/goals", element: <GoalsPage /> },
      { path: "/goalDetails", element: <GoalDetailPage /> },
      { path: "/documentation", element: <DocumentationPage /> },
    ],
  },
]);
