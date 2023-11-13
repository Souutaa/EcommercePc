import { Avatar } from "@mantine/core";
import "../Pages/HomePage/style.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Btn from "../Components/Button";
import { PATHS } from "../Contants/path";
import InputSearch from "../Components/Input/input-search";

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
