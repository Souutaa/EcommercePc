import "@mantine/carousel/styles.css";
import { AppShell } from "@mantine/core";
import "@mantine/core/styles.css";
import "font-awesome/css/font-awesome.min.css";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useAuthContext } from "../Context/AuthContext";
import { useEffect } from "react";

function MainLayout() {
  const authContext = useAuthContext();
  const location = useLocation();
  useEffect(() => {
    console.log("check-session");
    authContext.checkSession();
  }, [location.key]);
  return (
    <AppShell id="app">
      <Header />
      <Outlet />
      <Footer />
    </AppShell>
  );
}

export default MainLayout;
