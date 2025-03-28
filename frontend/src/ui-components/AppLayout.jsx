import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <Sidebar />
      <main className="bg-gradient-to-br to-blue-100 px-[4.8rem] ">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
