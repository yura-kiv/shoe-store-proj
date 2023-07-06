import MainPage from "../pages/MainPage";
import ProductsCollectionPage from "../pages/ProductsCollectionPage";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import UserPage from "../pages/UserPage";
import { Navigate } from "react-router-dom";

export const publicRoutes = [
  { index: true, element: <MainPage /> },
  { path: "/shoes/:type", element: <ProductsCollectionPage />, exact: true },
  { path: "/shoes/:type?/:id/:color", element: <ProductPage />, exact: true },
  { path: "/cart", element: <CartPage />, exact: true },
  { path: "/login", element: <LoginPage />, exact: true },
  { path: "/signup", element: <SignupPage />, exact: true },
  { path: "/user", element: <Navigate to="/login" />, replace: true },
  { path: "*", element: <NotFoundPage />, exact: true },
];

export const privateRoutes = [
  { index: true, element: <MainPage /> },
  { path: "/shoes/:type", element: <ProductsCollectionPage />, exact: true },
  { path: "/shoes/:type?/:id/:color", element: <ProductPage />, exact: true },
  { path: "/cart", element: <CartPage />, exact: true },
  { path: "/user", element: <UserPage />, exact: true },
  //   {
  //     path: "/login",
  //     element: <Navigate to="/user" />,
  //     replace: true,
  //     exact: true,
  //   },
  //   {
  //     path: "/signup",
  //     element: <Navigate to="/user" />,
  //     replace: true,
  //     exact: true,
  //   },
  { path: "*", element: <NotFoundPage />, exact: true },
];
