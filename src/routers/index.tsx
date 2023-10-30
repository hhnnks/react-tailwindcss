import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import lazyLoad from "./lazyLoad";
import Login from "@/pages/login";
import Page404 from "@/pages/page404";
import ComponentTabs from "@/pages/tabs";
import StrategicMode from "@/components/StrategicMode";
import EditTable from "@/pages/editTable/classEditTable";
import DesignPatterns from "@/components/DesignPatterns";

export const rootRouter = [
  {
    path: "/",
    element: <Navigate to="/editTable" />,
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
    path: "/componentTabs",
    element: <ComponentTabs />,
    meta: {
      requiresAuth: false,
      title: "componentTabs",
      key: "componentTabs",
    },
  },
  {
    path: "/strategicMode",
    element: <StrategicMode />,
    meta: {
      requiresAuth: false,
      title: "strategicMode",
      key: "strategicMode",
    },
  },
  {
    path: "/designPatterns",
    element: <DesignPatterns />,
    meta: {
      requiresAuth: false,
      title: "designPatterns",
      key: "designPatterns",
    },
  },
  {
    path: "/editTable",
    element: <EditTable />,
    meta: {
      requiresAuth: false,
      title: "editTable",
      key: "editTable",
    },
  },
  // {
  //   path: "/button",
  //   element: <Button />,
  //   meta: {
  //     requiresAuth: false,
  //     title: "Button",
  //     key: "Button",
  //   },
  // },
  // {
  //   path: "/Demo_GridBox",
  //   element: <Demo_GridBox />,
  //   meta: {
  //     requiresAuth: false,
  //     title: "Demo_GridBox",
  //     key: "Demo_GridBox",
  //   },
  // },

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
