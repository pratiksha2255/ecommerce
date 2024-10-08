import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Dashboard from "../pages/Dashboard/Dashboard";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import { withLogging } from "../ProtectedRoutes/Outlet";
import Cart from "../pages/Cart/Cart";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export const RouterView = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={withLogging(Dashboard)()} />
        <Route path="/about" element={withLogging(About)()} />
        <Route path="/dashboard" element={withLogging(Dashboard)()} />
        <Route path="/contact" element={withLogging(Contact)()} />
        <Route path="/cart" element={withLogging(Cart)()} />
        <Route path="/products" element={withLogging(Products)()} />
        <Route
          path="/productDetails/:id"
          element={withLogging(ProductDetails)()}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
