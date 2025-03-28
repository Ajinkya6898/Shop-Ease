import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "./Loader";

const AppLayout = () => {
  const { state } = useNavigation();
  console.log(state);
  if (state === "loading") {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <Sidebar />
      <main className="bg-gradient-to-br to-blue-100 mt-12 px-[4.8rem] ">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
