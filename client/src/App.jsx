import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./ui-components/AppRouter";

const App = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
