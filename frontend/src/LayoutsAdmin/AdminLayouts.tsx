import { AppShell, Avatar, Burger, Group, Menu, rem } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import {
  IconArchive,
  IconBoxMultiple,
  IconBrandNem,
  IconBriefcase,
  IconFlag,
  IconHome,
  IconTruckDelivery,
  IconUser,
} from "@tabler/icons-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import Seaparator from "../Components/Seaparator/Seaparator";
import AdminInfor from "../Components/AdminInfo/AdminInfo";

function AdminLayouts() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [opened, setOpened] = useState(false);
  const authContext = useAuthContext();
  const location = useLocation();
  useEffect(() => {
    console.log("check-session");
    authContext.checkSession();
  }, [location.key]);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group
          h="100%"
          px="md"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Menu opened={opened} onChange={setOpened}>
            <Menu.Target>
              <div className="logo-user" style={{ marginRight: "50px" }}>
                <Avatar src="/img/Avatar.png" alt="it's me" />
              </div>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item leftSection>Welcome!</Menu.Item>
              <AdminInfor />
              <Seaparator />
              <Link style={{ textDecoration: "none" }} to={"/"}>
                <Menu.Item
                  color="red"
                  leftSection={
                    <IconLogout
                      style={{
                        width: rem(14),
                        height: rem(14),
                      }}
                    />
                  }
                >
                  SignOut
                </Menu.Item>
              </Link>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Link to="/admin" className="logo" style={{ margin: "0 0 20px 30px" }}>
          <img src="/img/logoipsum-247.png" alt="" />
          <img src="/img/Techshop.png" alt="" />
        </Link>

        <Link to="/admin" className="admin-title">
          <IconHome />
          <span className="admin-text">Dashboard</span>
        </Link>
        <Seaparator />

        <Link to="/admin/product" className="admin-title">
          <IconBriefcase />
          <span className="admin-text">Product</span>
        </Link>
        <Link to="/admin/brands" className="admin-title">
          <IconBrandNem />
          <span className="admin-text">Brands</span>
        </Link>
        <Link to="/admin/categori" className="admin-title">
          <IconArchive />
          <span className="admin-text">Categories</span>
        </Link>
        <Seaparator />
        <Link to="/admin/order" className="admin-title">
          <IconTruckDelivery />
          <span className="admin-text">Order</span>
        </Link>
        <Seaparator />
        <Link to="/admin/user" className="admin-title">
          <IconUser />
          <span className="admin-text">Users</span>
        </Link>
        <Link to="/admin/role" className="admin-title">
          <IconFlag />
          <span className="admin-text">Roles</span>
        </Link>
      </AppShell.Navbar>
      <AppShell.Main>
        <div className="container-fluid">
          <Outlet />
        </div>
      </AppShell.Main>
    </AppShell>
  );
}

export default AdminLayouts;
