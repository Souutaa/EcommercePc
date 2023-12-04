import { Button, Divider, Menu, rem } from "@mantine/core";
import { useAuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import { IconArrowBarRight, IconUser } from "@tabler/icons-react";
import Seaparator from "../Seaparator/Seaparator";

function UserInfor() {
  const authContext = useAuthContext();
  return (
    <>
      <div className="user-info">
        <div className="user-name">{authContext.auth.sub}</div>
        <span className="user-email">{authContext.auth.mail}</span>
        {authContext.auth.aud === "ADMIN" ? (
          <Link
            style={{
              textDecoration: "none",
              margin: "10px -10px 0 -10px",
            }}
            to={"/admin"}
          >
            <Menu.Item
              leftSection={
                <IconUser
                  style={{
                    width: rem(14),
                    height: rem(14),
                  }}
                />
              }
              rightSection={
                <IconArrowBarRight
                  style={{
                    width: rem(14),
                    height: rem(14),
                  }}
                />
              }
              style={{ fontSize: "16px" }}
            >
              Đi tới trang admin
            </Menu.Item>
          </Link>
        ) : null}
      </div>
    </>
  );
}

export default UserInfor;
