import {
  Avatar,
  Autocomplete,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import "../Pages/HomePage/style.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Btn from "../Components/Button";
import { PATHS } from "../Contants/path";
import InputSearch from "../Components/Input/input-search";
import Seaparator from "../Components/Seaparator/Seaparator";
import UserInfor from "../Components/UserInfor/UserInfor";
import UserOder from "../Components/UserOrder/UserOrder";

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
          <InputSearch />
          <Link to="/login">
            <Btn maintine="a">Đăng Nhập</Btn>
          </Link>

          <div className="user-login">
            <Link to={PATHS.CART}>
              <div className="cart">
                <button className="button-cart">
                  <Avatar src="/img/Button.png" />
                </button>
              </div>
            </Link>
            <div className="logo-user" onClick={toggleDropdown}>
              <Avatar src="/img/Avatar.png" alt="it's me" />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <UserInfor />
                <Seaparator />
                <UserOder />
                <Seaparator />
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
