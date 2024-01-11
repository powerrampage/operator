import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { NotFound } from "components/shared";
import { useUser } from "hooks";

const Home = lazy(() => import("pages/Home"));
const Auth = lazy(() => import("pages/Auth"));
const List = lazy(() => import("pages/List"));
const Reference = lazy(() => import("pages/Reference"));

const Config = lazy(() => import("pages/Config"));
const Operator = lazy(() => import("pages/Config/components/Operator"));
const OperatorShablon = lazy(() => import("pages/Config/components/OperatorShablon"));
const OperatorCompany = lazy(() => import("pages/Config/components/OperatorCompany"));

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
    {
      path: "/list",
      element: <List />,
    },
    {
      path: "/config",
      element: <Config />,
      children: [
        { path: "", element: <Navigate to="operator" /> },
        { path: "operator", element: <Operator /> },
        { path: "operator-company", element: <OperatorCompany /> },
        { path: "operator-shablon", element: <OperatorShablon /> },
      ],
    },
    {
      path: "/reference",
      element: <Reference />,
    },
    ...notFoundRoutes,
  ]);

  return isLogged ? routes : notAuthRoutes;
}
