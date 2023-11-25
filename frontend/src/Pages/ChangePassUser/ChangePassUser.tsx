import React from "react";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { Avatar, Button, Divider, PasswordInput, Stack } from "@mantine/core";
import UserInfor from "../../Components/UserInfor/UserInfor";
import UserOder from "../../Components/UserOrder/UserOrder";
import ChangePass from "../../Components/ChangePass/ChangePass";
import { useDisclosure } from "@mantine/hooks";

const ChangePassUser = () => {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <div className="container">
      <Breadcrumbs />
      <div className="infouser-content">
        <div className="infouser-sidebar">
          <div className="infouser-avatar">
            <Avatar style={{ marginTop: "20px" }}></Avatar>
            <div className="margin-right">
              <UserInfor />
            </div>
          </div>
          <UserOder />
          <ChangePass />
        </div>
        <div className="infouser-container">
          <h3 className="infouser-title mb-20">Thay đổi mật khẩu</h3>
          <Divider />
          <div className="change-pass-content">
            <PasswordInput
              style={{ textAlign: "left", marginBottom: "15px" }}
              label="Mật khẩu cũ"
              placeholder="Nhập mật khẩu cũ"
            />
            <Stack>
              <PasswordInput
                style={{ textAlign: "left" }}
                label="Mật khẩu mới"
                defaultValue="hello my friend"
                visible={visible}
                onVisibilityChange={toggle}
              />
              <PasswordInput
                style={{ textAlign: "left" }}
                label="Nhập lại mật khẩu mới"
                defaultValue="hello my friend"
                visible={visible}
                onVisibilityChange={toggle}
              />
            </Stack>
            <Button mt={"xl"}>Thay đổi mật khẩu</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassUser;
