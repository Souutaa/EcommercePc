import { Avatar, Autocomplete, Menu } from "@mantine/core";
import { Button, Text, rem } from "@mantine/core";
import "../Pages/HomePage/style.css";
import { Link } from "react-router-dom";
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
import { PATHS } from "../Constants/path";
import "../Pages/HomePage/style.css";
import { useAuthContext } from "../Context/AuthContext";
import Seaparator from "../Components/Seaparator/Seaparator";
import UserInfor from "../Components/UserInfor/UserInfor";
import UserOder from "../Components/UserOrder/UserOrder";
import { useState } from "react";

const Header = () => {
  const [opened, setOpened] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          {/* {!authContext.auth.isAuthenticated ? ( */}
          <Link to="/login">
            <Btn maintine="a">Đăng Nhập</Btn>
          </Link>

          {/* ):( */}
          <div className="logo">
            <Link to={PATHS.CART}>
              <div className="cart">
                <button title="cart-btn" type="button" className="button-cart">
                  <Avatar src="/img/Button.png" />
                </button>
              </div>
            </Link>
            <Menu opened={opened} onChange={setOpened}>
              <Menu.Target>
                <div className="logo-user">
                  <Avatar src="/img/Avatar.png" alt="it's me" />
                </div>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item style={{ padding: "0" }}>
                  <UserInfor />
                </Menu.Item>
                <Menu.Item style={{ padding: "0" }}>
                  <Seaparator />
                </Menu.Item>
                <Menu.Item style={{ padding: "0" }}>
                  <UserOder />
                  <Seaparator />
                </Menu.Item>
                <Menu.Item style={{ padding: "0" }}>
                  <div className="user-logout">Sign Out</div>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
