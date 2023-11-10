import {
  AppShell,
  Group,
  Grid,
  Burger,
  TextInput,
  Button,
  Avatar,
  Autocomplete,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import "../Pages/HomePage/style.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            <img src="/img/logoipsum-247.png" alt="" />
            <img src="/img/Techshop.png" alt="" />
          </Link>
          <div className="search">
            <Autocomplete
              className="input-size"
              size="sm"
              leftSection={<IconSearch className="icon-search" />}
              radius="md"
              placeholder="Search"
              data={["MSI", "Macbook", "Asus"]}
            />
          </div>
          <Link to="/login">
            <Button>Đăng Nhập</Button>
          </Link>

          <div className="user-login">
            <div className="cartegory">
              <button className="button-cartegory">
                <Avatar src="/img/Button.png" />
              </button>
            </div>
            <div className="logo-user" onClick={toggleDropdown}>
              <Avatar src="/img/Avatar.png" alt="it's me" />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div className="user-info">
                  <div className="user-name">Nguyễn Lương</div>
                  <span className="user-email">lowtee.vn@gmail.com</span>
                </div>
                <div className="seaparator"></div>
                <div className="user-logout">Sign Out</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
