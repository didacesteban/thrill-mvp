import React from "react";
import { Route, Routes } from "react-router-dom";
// import MainPage from "./MainPage";

const Router = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route}
          path={`/${route.path}`}
          element={<div>{route.element}</div>}
        />
      ))}

      {/* <Route path="*" element={<MainPage />} /> */}
    </Routes>
  );
};

export default Router;
