import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import Profile from "../pages/Profile";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgetPassword";
import NotFound from "../pages/NotFound";
import ServiceCard from "../components/home_components/ServiceCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <ServiceCard />,
      },
      {
        path: "service/:id",
        element: (
            <ServiceDetails />
        ),
      },
      {
        path: "profile",
        element: (
            <Profile />
        ),
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "forget-password",
        element: <ForgotPassword />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
