import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import lazyLoad from "./lazyLoad";
import Login from "@/pages/login";
import Page404 from "@/pages/page404";
import ComponentTabs from "@/pages/tabs";
import Button from "@/components/Button";
import Demo_GridBox from "@/view/demo_hover_gridbox";
export const rootRouter = [
  {
    path: "/",
    element: <Navigate to="/Demo_GridBox" />,
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: "login",
      key: "login",
    },
  },
  {
    path: "/ComponentTabs",
    element: <ComponentTabs />,
    meta: {
      requiresAuth: false,
      title: "ComponentTabs",
      key: "ComponentTabs",
    },
  },
  {
    path: "/button",
    element: <Button />,
    meta: {
      requiresAuth: false,
      title: "Button",
      key: "Button",
    },
  },
  {
    path: "/Demo_GridBox",
    element: <Demo_GridBox />,
    meta: {
      requiresAuth: false,
      title: "Demo_GridBox",
      key: "Demo_GridBox",
    },
  },

  {
    path: "/404",
    element: <Page404 />,
    meta: {
      requiresAuth: false,
      title: "404",
      key: "404",
    },
  },

  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
