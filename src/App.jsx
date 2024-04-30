import React, {useState} from "react";
import { BrowserRouter, Link } from "react-router-dom";
import {UserCircleIcon} from "@heroicons/react/solid"
import Router from "./Router";
import { getRoutes } from "./Routes";
import Profile from "./Profile";
import MainPage from "./MainPage";
import Post from "./Post";

function App() {
  const [openPage, setOpenPage] = useState('mainPage');
  return (
    <BrowserRouter basename="/thrill-mvp">
        <div className="bg-indigo-950 border-b lg-5 flex justify-between text-md p-3 sticky top-0 z-50">
        <div className="text-white flex items-center">
            <div onClick={() => setOpenPage("mainPage")} className="font-semibold inline-block">thrill</div>
        </div>
        <div onClick={() => setOpenPage("profile")}><UserCircleIcon className="w-6 h-6 fill-white"/></div>
    </div>
    <div>
      {/* <Router routes={getRoutes()} /> */}
      {openPage === "profile" && (
        <Profile />
      )}
            {openPage === "mainPage" && (
        <MainPage setOpenPage={setOpenPage} />
      )}
            {openPage === "post" && (
        <Post />
      )}
    </div>
    </BrowserRouter>
  );
}

export default App;
