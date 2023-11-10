import { useDisclosure } from "@mantine/hooks";
import "font-awesome/css/font-awesome.min.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./style.css";
import "@mantine/carousel/styles.css";
import {
  AppShell,
  Burger,
  Button,
  Container,
  Grid,
  GridCol,
  Group,
  Skeleton,
  TextInput,
} from "@mantine/core";
import {
  IconArrowRight,
  IconDownload,
  IconPhoto,
  IconRegistered,
  IconSearch,
  IconUser,
  IconUserPlus,
} from "@tabler/icons-react";
import BannerSection from "./BannerSection";
import Content from "./Content";
import ProductMore from "./ProductMore";
import ProductDetail from "./ProductDetail";
import ProductCart from "./ProductCart";
import ProductCheckout from "./ProductCheckout";

const Home = () => {
  return (
    // <AppShell>
    <AppShell.Section>
      {/* <BannerSection />
      <Content /> */}
      {/* <ProductMore /> */}
      {/* <ProductDetail /> */}
      {/* <ProductCart /> */}
      <ProductCheckout />
    </AppShell.Section>

    // </AppShell>
  );
};
export default Home;
