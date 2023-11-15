import "@mantine/carousel/styles.css";
import { AppShell } from "@mantine/core";
import "@mantine/core/styles.css";
import "font-awesome/css/font-awesome.min.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout() {
  return (
    <AppShell className="App">
      <Header />
      <Outlet />
      <Footer />
    </AppShell>
  );
}

export default MainLayout;
