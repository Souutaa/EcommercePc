import {
  Button,
  Input,
  PasswordInput
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";

const FormUserAdmin = () => {
  const [visible, { toggle }] = useDisclosure(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const data = {
    username: username,
    password: password,
    confirmPassword: confirmPassword,
    email: email,
  };

  const handleCreateUser = async () => {
    const response = await axios.post("http://127.0.0.1:8080/auth/register", data);
  };
  return (
    <div>
      <div className="modal-body">
        <Input.Wrapper className="mb-20" label="Tên đăng nhập">
          <Input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </Input.Wrapper>
        <Input.Wrapper className="mb-20" label="Email">
          <Input placeholder="abc@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Input.Wrapper>
        <div className="input-2">
          <PasswordInput
            style={{ width: "49%" }}
            label="Password"
            onVisibilityChange={toggle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
    />
          <PasswordInput
            style={{ width: "49%" }}
            label="Confirm password"
            onVisibilityChange={toggle}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="modal-footer">
        <Button
          mt="md"
          onClick={async () => {
            await handleCreateUser();
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
