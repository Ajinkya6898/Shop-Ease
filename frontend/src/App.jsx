import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui-components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/products", element: <Products /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/cart", element: <Cart /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
