import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage";
import MainLayout from "./Layouts/Index";
import LoginPage from "./Pages/LoginPage";
import { PATHS } from "./Contants/path";
import SignUP from "./Pages/LoginPage/SignUp";
import SignIn from "./Pages/LoginPage/SignIn";
import ProductMore from "./Pages/ProductMore/ProductMore";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProductCart from "./Pages/ProductCart/ProductCart";
import ProductCheckout from "./Pages/ProductCheckout/ProductCheckout";
import ForgotPassword from "./Pages/LoginPage/ForgotPassword";
import ForgotPasswordVerification from "./Pages/LoginPage/ForgotPasswordVerification";
import ChangePassword from "./Pages/LoginPage/ChangePassword";
import ProductSearch from "./Pages/ProductSearch/ProductSearch";
import ProductOdered from "./Pages/ProductOdered/ProductOdered";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={PATHS.LOGIN.INDEX} element={<LoginPage />}>
              <Route index element={<SignUP />} />
              <Route path={PATHS.LOGIN.SIGNIN} element={<SignIn />} />
              <Route
                path={PATHS.LOGIN.FPASSWORD}
                element={<ForgotPassword />}
              />
              <Route
                path={PATHS.LOGIN.FPVERIFI}
                element={<ForgotPasswordVerification />}
              ></Route>
              <Route
                path={PATHS.LOGIN.CHANGE}
                element={<ChangePassword />}
              ></Route>
            </Route>
            <Route path={PATHS.HOMELOGIN} element={<SignUP />} />
            <Route path={PATHS.MORE} element={<ProductMore />} />
            <Route path={PATHS.PRODUCT} element={<ProductDetail />} />
            <Route path={PATHS.CART} element={<ProductCart />} />
            <Route path={PATHS.PAYMENT} element={<ProductCheckout />} />
            <Route path={PATHS.SEARCH} element={<ProductSearch />} />
            <Route path={PATHS.ODERED} element={<ProductOdered />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
