import React from "react";
import MainPage from "./MainPage";
import Profile from "./Profile";
import Post from "./Post";

export const getRoutes = () => {
  const routes = [
    {
      path: "",
      element: <MainPage />,
    },
    {
      path: "post",
      element: <MainPage />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "post/:id",
      element: <Post />,
    },
  ];

  return routes;
};
