import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { AppShell, AppShellFooter, AppShellHeader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "font-awesome/css/font-awesome.min.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/carousel/styles.css";

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
