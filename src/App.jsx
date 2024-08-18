import React, {useState} from "react";
import { BrowserRouter, Link } from "react-router-dom";
import {UserCircleIcon} from "@heroicons/react/solid"
import Router from "./Router";
import { getRoutes } from "./Routes";

function App() {
  const [openPage, setOpenPage] = useState('mainPage');
  return (
    <BrowserRouter basename="/thrill-mvp/">
        <div className="bg-indigo-950 border-b lg-5 flex justify-between text-md p-3 sticky top-0 z-50">
        <div className="text-white flex items-center">
        <Link to="/"> <div className="font-semibold inline-block">thrill</div></Link>
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
