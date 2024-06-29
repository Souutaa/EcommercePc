import { Avatar, Menu } from "@mantine/core";
import { Button, Text, rem } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import Btn from "../../Components/Button";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconLogout,
  IconArrowBarRight,
} from "@tabler/icons-react";
import InputSearch from "../../Components/Input/input-search";
import { PATHS } from "../../Constants/path";
import { useAuthContext } from "../../Context/AuthContext";
import { useState } from "react";
import UserInfor from "../../Components/UserInfor/UserInfor";
import UserOder from "../../Components/UserOrder/UserOrder";
import Seaparator from "../../Components/Seaparator/Seaparator";
import styled from ".//Header.module.css";

const Header = () => {
  const [opened, setOpened] = useState(false);
  const authContext = useAuthContext();
  let url = useLocation();
  const slicedPath = url.pathname.split("/").slice(0, 2).join("/");

  return (
    <div className={styled.header}>
      <div className={styled.navbar}>
        <Link to="/" className={styled.logo}>
          <img src="/img/Logo.svg" alt="" />
        </Link>

        {slicedPath === "/login" ? null : <InputSearch />}

        {!authContext.auth.isAuthenticated ? (
          slicedPath === "/login" ? null : (
            <div className={styled["login_button"]}>
              <Link to="/login">
                <Btn maintine="a">Đăng Nhập</Btn>
              </Link>
            </div>
          )
        ) : (
          <div className={styled["user-login"]}>
            <Link to={PATHS.CART}>
              <button type="button" className={styled["button-cart"]}>
                <Avatar src="/img/Button.png" size={"lg"} />
              </button>
            </Link>
            <Menu opened={opened} onChange={setOpened}>
              <Menu.Target>
                <div className={styled["logo-user"]}>
                  <Avatar src="/img/Avatar.png" alt="it's me" size={"lg"} />
                </div>
              </Menu.Target>
              <Menu.Dropdown>
                <UserInfor />
                <Seaparator />
                {authContext.auth.aud === "ADMIN" ? (
                  <>
                    <div style={{ padding: "14px 20px" }}>
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#333",
                          fontSize: "1.4rem",
                        }}
                        to={"/admin"}
                      >
                        Đi tới trang admin
                      </Link>
                    </div>
                    <Seaparator />
                  </>
                ) : null}

                <UserOder />
                <Seaparator />
                <Menu.Item
                  color="red"
                  style={{
                    fontSize: "1.4rem",
                    lineHeight: "2.4rem",
                  }}
                  leftSection={
                    <IconLogout
                      style={{
                        width: "2rem",
                        height: "2rem",
                      }}
                    />
                  }
                  onClick={authContext.logout}
                >
                  SignOut
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
