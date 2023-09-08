import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import ErrorLayout from "../layout/ErrorLayout";
import MainLayout from "../layout/MainLayout";
import NotFound from "../layout/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/main/Home";
import Login from "../pages/main/Login";
import Profile from "../pages/main/Profile";
import Register from "../pages/main/Register";
import Teams from "../pages/main/Teams";

export const routes = createBrowserRouter([
  // main
  {
    path: "/",
    errorElement: <ErrorLayout />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "team",
        element: <Teams />,
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
        element: <Profile />,
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
        element: <Dashboard />,
      },
    ],
  },
  //   not found
  {
    path: "/*",
    element: <NotFound />,
  },
]);
