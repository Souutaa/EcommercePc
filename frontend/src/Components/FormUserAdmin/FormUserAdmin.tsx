import {
  Button,
  Input,
  NativeSelect,
  PasswordInput,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import React from "react";

const FormUserAdmin = () => {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <div>
      <div className="modal-body">
        <div className="input-2">
          <Input.Wrapper style={{ width: "49%" }} className="mb-20" label="Họ">
            <Input />
          </Input.Wrapper>
          <Input.Wrapper style={{ width: "49%" }} className="mb-20" label="Tên">
            <Input />
          </Input.Wrapper>
        </div>
        <Input.Wrapper className="mb-20" label="Email">
          <Input placeholder="abc@gmail.com" />
        </Input.Wrapper>
        <Input.Wrapper className="mb-20" label="Tên đăng nhập">
          <Input placeholder="useradmin1" />
        </Input.Wrapper>
        <div className="input-2">
          <PasswordInput
            style={{ width: "49%" }}
            label="Password"
            defaultValue="hello my friend"
            onVisibilityChange={toggle}
          />
          <PasswordInput
            style={{ width: "49%" }}
            label="Confirm password"
            defaultValue="hello my friend"
            onVisibilityChange={toggle}
          />
        </div>
        <NativeSelect
          style={{ width: "49%" }}
          label="Role"
          data={["Admin", "Người dùng", "Testing", "Nhân viên"]}
        />
      </div>
      <div className="modal-footer">
        <Button
          mt="md"
          onClick={() => {
            notifications.show({
              withCloseButton: true,
              autoClose: 1500,
              message: "Thêm người dùng thành công",
              color: "teal",
              icon: <IconCheck />,
              className: "my-notification-class",
              loading: false,
            });
            modals.closeAll();
          }}
        >
          Đăng ký
        </Button>
      </div>
    </div>
  );
};

export default FormUserAdmin;
