import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <Sidebar />
      <main className="bg-[#f9fafb] p-[4rem_4.8rem_6.4rem]">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
