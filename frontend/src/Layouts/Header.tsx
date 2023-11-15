import { Avatar, Autocomplete, Menu } from "@mantine/core";
import { Button, Text, rem } from "@mantine/core";
import "../Pages/HomePage/style.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Btn from "../Components/Button";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import InputSearch from "../Components/Input/input-search";
import Seaparator from "../Components/Seaparator/Seaparator";
import UserInfor from "../Components/UserInfor/UserInfor";
import UserOder from "../Components/UserOrder/UserOrder";
import { PATHS } from "../Constants/path";

const Header = () => {
  const [opened, setOpened] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            <img src="/img/logoipsum-247.png" alt="" />
            <img src="/img/Techshop.png" alt="" />
          </Link>
          <InputSearch />
          <Link to="/login">
            <Btn maintine="a">Đăng Nhập</Btn>
          </Link>

          <div className="user-login">
            <Link to={PATHS.CART}>
              <div className="cart">
                <button title="cart-btn" type="button" className="button-cart">
                  <Avatar src="/img/Button.png" />
                </button>
              </div>
            </Link>
            <Menu opened={opened} onChange={setOpened}>
              <Menu.Target>
                <Button>Toggle menu</Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item
                  leftSection={
                    <IconSettings style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Settings
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconMessageCircle
                      style={{ width: rem(14), height: rem(14) }}
                    />
                  }
                >
                  Messages
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconPhoto style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Gallery
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconSearch style={{ width: rem(14), height: rem(14) }} />
                  }
                  rightSection={
                    <Text size="xs" c="dimmed">
                      ⌘K
                    </Text>
                  }
                >
                  Search
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item
                  leftSection={
                    <IconArrowsLeftRight
                      style={{ width: rem(14), height: rem(14) }}
                    />
                  }
                >
                  Transfer my data
                </Menu.Item>
                <Menu.Item
                  color="red"
                  leftSection={
                    <IconTrash style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Delete my account
                </Menu.Item>
              </Menu.Dropdown>

              <div className="logo-user">
                <Avatar src="/img/Avatar.png" alt="it's me" />
              </div>
            </Menu>

            {/* {isDropdownOpen && (
              <div className="dropdown-menu">
                <UserInfor />
                <Seaparator />
                <UserOder />
                <Seaparator />
                <div className="user-logout">Sign Out</div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
