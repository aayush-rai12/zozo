import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/login/login";
import Register from "../components/register/Registration";
import Home from "../components/Home/Home";
import ForgotPassword from "../components/forgotPass/forgotPass";

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
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default ReactRouting;
