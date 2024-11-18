import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/login/login";
import Register from "../components/register/Registration";
import Home from "../components/Home/Home";
import ForgotPassword from "../components/forgotPass/forgotPass";
import ProfileComponent from "../components/ProfileSection/profileDetails";
import FeelingCard from "../components/user/FeelingCard";

const ReactRouting = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
    },
    {
      path: "/profile",
      element: <ProfileComponent />, 
    },
    {
      path: "/FeelingCard",
      element: <FeelingCard />, 
    },
  ]);

  return <RouterProvider router={router} />;
};

export default ReactRouting;
