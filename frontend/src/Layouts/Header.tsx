import { Avatar, Menu } from "@mantine/core";
import { Button, Text, rem } from "@mantine/core";
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
import { useAuthContext } from "../Context/AuthContext";
import { useState } from "react";
const Header = () => {
  const [opened, setOpened] = useState(false);
  const authContext = useAuthContext();

  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            <img src="/img/logoipsum-247.png" alt="" />
            <img src="/img/Techshop.png" alt="" />
          </Link>
          <InputSearch />

          {!authContext.auth.isAuthenticated ? (
            <Link to="/login">
              <Btn maintine="a">Đăng Nhập</Btn>
            </Link>
          ) : (
            <div className="user-login">
              <Link to={PATHS.CART}>
                <div className="cart">
                  <button
                    title="cart-btn"
                    type="button"
                    className="button-cart"
                  >
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
                      <IconSettings
                        style={{ width: rem(14), height: rem(14) }}
                      />
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
