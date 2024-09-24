import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import { withLogging } from "../HOC/Outlet";
import ProductListing from "../pages/ProductListing";

export const RouterView = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={withLogging(Dashboard)()} />
        <Route path="/about" element={withLogging(About)()} />
        <Route path="/dashboard" element={withLogging(Dashboard)()} />
        <Route path="/contact" element={withLogging(Contact)()} />
        <Route
          path="/product_listing/:id"
          element={withLogging(ProductListing)()}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
