import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage";
import MainLayout from "./Layouts/Index";
import LoginPage from "./Pages/LoginPage";
import { PATHS } from "./Contants/path";
import SignUP from "./Pages/LoginPage/SignUp";
import SignIn from "./Pages/LoginPage/SignIn";

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
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
