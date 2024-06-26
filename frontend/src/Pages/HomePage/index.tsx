import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./style.css";
import "@mantine/carousel/styles.css";
import { AppShell } from "@mantine/core";
import BannerSection from "./BannerSection";
import Content from "./Content";
import { memo } from "react";

const Home = () => {
  return (
    <AppShell.Section>
      <BannerSection />
      <Content />
    </AppShell.Section>
  );
};
export default memo(Home);
