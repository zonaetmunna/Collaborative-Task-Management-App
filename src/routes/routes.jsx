import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import ErrorLayout from "../layout/ErrorLayout";
import MainLayout from "../layout/MainLayout";
import NotFound from "../layout/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/main/Login";
import Profile from "../pages/main/Profile";
import Register from "../pages/main/Register";
import Task from "../pages/main/Task";
import Teams from "../pages/main/Teams";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
  // main
  {
    path: "/",
    errorElement: <ErrorLayout />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Task />
          </PrivateRoutes>
        ),
      },
      {
        path: "team",
        element: (
          <PrivateRoutes>
            <Teams />
          </PrivateRoutes>
        ),
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
  //   dashboard
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
    ],
  },
  //   not found
  {
    path: "/*",
    element: <NotFound />,
  },
]);
