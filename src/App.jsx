import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import {UserCircleIcon} from "@heroicons/react/solid"
import Router from "./Router";
import { getRoutes } from "./Routes";

function App() {
  return (
    <BrowserRouter basename="/thrill-mvp">
        <div className="bg-indigo-950 border-b lg-5 flex justify-between text-md p-3 sticky top-0 z-50">
        <div className="text-white flex items-center">
            <a href="/" className="font-semibold inline-block">thrill</a>
        </div>
        <Link to="profile"><UserCircleIcon className="w-6 h-6 fill-white"/></Link>
    </div>
    <div>
      <Router routes={getRoutes()} />
    </div>
    </BrowserRouter>
  );
}

export default App;
