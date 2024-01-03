import { lazy, useMemo } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { NotFound } from "components/shared";
import { useUser } from "hooks";

const Home = lazy(() => import("pages/Home"));
const Auth = lazy(() => import("pages/Auth"));

export default function AllRoutes() {
  const { isLogged, role } = useUser();

  const notFoundRoutes = [
    { path: "*", element: <Navigate to="/404" /> },
    { path: "/404", element: <NotFound /> },
  ];

  const notAuthRoutes = useRoutes([
    { path: "*", element: <Navigate to="/auth/sign-in" /> },
    { path: "/auth/*", element: <Auth /> },
  ]);

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    ...notFoundRoutes,
  ]);

  return isLogged ? routes : notAuthRoutes;
}
