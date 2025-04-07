import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Dashboard from "../pages/Dashboard";
import Products, { loader as productsLoader } from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import ProtectedRoute from "./ProtectedRoute";
import Orders from "../pages/Orders";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Payment from "../pages/Payment";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPass from "../pages/ForgotPass";
import VerifyOTP from "../pages/VerifyOTP";
import ResetPassword from "../pages/ResetPassword";
import MyProfile from "../pages/MyProfile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/products", element: <Products />, loader: productsLoader },
      { path: "/products/:id", element: <ProductDetails /> },
      {
        path: "/orders",
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "/myprofile",
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forgot-password", element: <ForgotPass /> },
  { path: "/forgot-password/verify-otp", element: <VerifyOTP optLength={4} /> },
  { path: "/forgot-password/reset", element: <ResetPassword /> },
]);

export default Router;
