import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import OderUser from "./Components/OrderUser/OrderUser";
import { PATHS } from "./Constants/path";
import { useAuthContext } from "./Context/AuthContext";
import MainLayout from "./Layouts/Index";
import Home from "./Pages/HomePage";
import InfoUser from "./Pages/InfoUser/InfoUser";
import LoginPage from "./Pages/LoginPage";
import ChangePassword from "./Pages/LoginPage/ChangePassword";
import ForgotPassword from "./Pages/LoginPage/ForgotPassword";
import ForgotPasswordVerification from "./Pages/LoginPage/ForgotPasswordVerification";
import SignIn from "./Pages/LoginPage/SignIn";
import SignUp from "./Pages/LoginPage/SignUp";
import ProductCart from "./Pages/ProductCart/ProductCart";
import ProductCheckout from "./Pages/ProductCheckout/ProductCheckout";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProductMore from "./Pages/ProductMore/ProductMore";
import ProductOdered from "./Pages/ProductOdered/ProductOdered";
import ProductSearch from "./Pages/ProductSearch/ProductSearch";

function App() {
  const authContext = useAuthContext();

  useEffect(() => {
    authContext.checkSession();
  }, [authContext]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={PATHS.LOGIN.INDEX} element={<LoginPage />}>
              <Route index element={<SignIn />} />
              <Route path={PATHS.LOGIN.SIGNUP} element={<SignUp />} />
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
            <Route path={PATHS.MORE} element={<ProductMore />} />
            <Route
              path={PATHS.PRODUCT + "/:productLine"}
              element={<ProductDetail />}
            />
            <Route path={PATHS.CART} element={<ProductCart />} />
            <Route path={PATHS.PAYMENT} element={<ProductCheckout />} />
            <Route path={PATHS.SEARCH} element={<ProductSearch />} />
            <Route path={PATHS.ORDERED} element={<ProductOdered />} />
            <Route path={PATHS.ORDER} element={<OderUser />} />
            <Route path={PATHS.USERINFO} element={<InfoUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
