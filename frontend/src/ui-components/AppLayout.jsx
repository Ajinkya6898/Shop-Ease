import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] flex-col h-screen">
      <header>this is a header</header>
      <main className="flex gap-8">
        <Sidebar />
        <Outlet />
      </main>
      <footer>tis is footer</footer>
    </div>
  );
};

export default AppLayout;
