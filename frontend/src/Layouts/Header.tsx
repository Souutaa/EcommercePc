import {
  AppShell,
  Group,
  Grid,
  Burger,
  TextInput,
  Button,
} from "@mantine/core";
import { IconSearch, IconUser, IconUserPlus } from "@tabler/icons-react";
import React from "react";
import "../Pages/HomePage/style.css";

const Header = () => {
  return (
    <>
      {" "}
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src="/logoipsum-247.png" alt="" />
            <img src="/Techshop.png" alt="" />
          </div>
          <div className="search">
            <TextInput
              className="input-size"
              size="sm"
              leftSection={<IconSearch className="icon-search" />}
              radius="md"
              placeholder="Search"
            />
          </div>
          <div>
            <Button>Đăng Nhập</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
