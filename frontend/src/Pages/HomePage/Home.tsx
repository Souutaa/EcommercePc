import { useDisclosure } from "@mantine/hooks";
import "font-awesome/css/font-awesome.min.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./style.css";
import { Carousel } from "@mantine/carousel";
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
import Header from "../../Layouts/Header";
import Navbar from "../../Layouts/Footer";
import BannerSection from "./BannerSection";
import Content from "./Content";
import SignUP from "../../Components/ModalSignUP/SignUp";
import Footer from "../../Layouts/Footer";

const Home = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell header={{ height: 90 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        {/* <AppShell.Section>
          <div className="container">
            <BannerSection />
            <Content />
          </div>
        </AppShell.Section> */}
        <div className="container">
          <SignUP />
        </div>
      </AppShell.Main>

      <AppShell>
        <Footer />
      </AppShell>
    </AppShell>
  );
};
export default Home;
