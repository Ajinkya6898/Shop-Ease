import React, { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "./Loader";

const AppLayout = () => {
  const { state } = useNavigation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />

      <div className="lg:grid lg:grid-cols-[26rem_1fr] lg:grid-rows-[auto_1fr] flex-1 flex flex-col lg:flex-row">
        <div
          className={`lg:block fixed inset-0 lg:static bg-black bg-opacity-50 transition-all lg:bg-transparent lg:opacity-100 lg:z-0 z-10 ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSidebarOpen(false)}
        ></div>

        <Sidebar
          className={`lg:block ${sidebarOpen ? "block" : "hidden"} lg:flex`}
        />

        <main className="lg:col-span-1 bg-gradient-to-br to-brand-100 py-12 px-6 overflow-y-scroll flex-1">
          {state === "loading" && <Loader />}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
