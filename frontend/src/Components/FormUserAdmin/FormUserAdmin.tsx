import {
  Button,
  Input,
  NativeSelect,
  PasswordInput
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";

const FormUserAdmin = () => {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <div>
      <div className="modal-body">
        <Input.Wrapper className="mb-20" label="Tên đăng nhập">
          <Input placeholder="username" />
        </Input.Wrapper>
        <Input.Wrapper className="mb-20" label="Email">
          <Input placeholder="abc@gmail.com" />
        </Input.Wrapper>
        <div className="input-2">
          <PasswordInput
            style={{ width: "49%" }}
            label="Password"
            onVisibilityChange={toggle}
          />
          <PasswordInput
            style={{ width: "49%" }}
            label="Confirm password"
            onVisibilityChange={toggle}
          />
        </div>
        <NativeSelect
          style={{ width: "49%" }}
          label="Role"
          data={[
            { value: "ADMIN", label: "Quản trị viên" },
            { value: "USER", label: "Người dùng" },
            { value: "MANAGER", label: "Nhân viên" },
          ]}
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
