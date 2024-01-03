import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const SignIn = lazy(() => import("./pages/SignIn"));

export default function AuthRoutes() {
  return useRoutes([
    {
      path: "/sign-in",
      element: <SignIn />,
    },
  ]);
}
