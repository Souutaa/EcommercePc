import { Button, Input, PasswordInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";

const FormUserAdmin = () => {
  const [visible, { toggle }] = useDisclosure(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorHandleInputUsername, setErrorHandleInputUsername] = useState("");
  const [errorHandleInputPass, setErrorHandleInputPass] = useState("");
  const [errorHandleInputPassConfirm, setErrorHandleInputPassConfirm] =
    useState("");
  const [errorHandleInputMail, setErrorHandleInputMail] = useState("");
  const inputUsernameHandle = (e: string) => {
    if (!e) {
      setErrorHandleInputUsername("Vui lòng nhập Username");
    } else {
      setErrorHandleInputUsername("");
    }
  };

  const inputPassHandle = (e: string) => {
    if (!e) {
      setErrorHandleInputPass("Vui lòng nhập Password");
    } else {
      setErrorHandleInputPass("");
    }
  };

  const inputPassConfirmHandle = (e: string) => {
    if (!e) {
      setErrorHandleInputPassConfirm("Vui lòng nhập lại Password");
    } else {
      setErrorHandleInputPassConfirm("");
    }
  };

  const inputMailHandle = (e: string) => {
    if (!e) {
      setErrorHandleInputMail("Vui lòng nhập mail: ***@*mail.com");
    } else {
      setErrorHandleInputMail("");
    }
  };

  const data = {
    username: username,
    password: password,
    confirmPassword: confirmPassword,
    email: email,
  };

  // const handleCreateUser = async () => {
  //   const response = await axios.post(
  //     "http://127.0.0.1:8080/auth/register",
  //     data
  //   );
  // };
  return (
    <div>
      <div className="modal-body">
        <Input.Wrapper
          className="mb-20"
          label="Tên đăng nhập"
          error={errorHandleInputUsername}
        >
          <Input
            error={errorHandleInputUsername}
            placeholder="username"
            value={username}
            onChange={(e) => {
              inputUsernameHandle(e.target.value);
              setUsername(e.target.value);
            }}
          />
        </Input.Wrapper>
        <Input.Wrapper
          className="mb-20"
          label="Email"
          error={errorHandleInputMail}
        >
          <Input
            error={errorHandleInputMail}
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => {
              inputMailHandle(e.target.value);
              setEmail(e.target.value);
            }}
          />
        </Input.Wrapper>
        <div className="input-2">
          <PasswordInput
            error={errorHandleInputPass}
            style={{ width: "49%" }}
            label="Password"
            onVisibilityChange={toggle}
            value={password}
            onChange={(e) => {
              inputPassHandle(e.target.value);
              setPassword(e.target.value);
            }}
          />
          <PasswordInput
            style={{ width: "49%" }}
            error={errorHandleInputPassConfirm}
            label="Confirm password"
            onVisibilityChange={toggle}
            value={confirmPassword}
            onChange={(e) => {
              inputPassConfirmHandle(e.target.value);
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="modal-footer">
        <Button
          mt="md"
          onClick={async () => {
            await axios
              .post("http://127.0.0.1:8080/author/register", data)
              .then((req) => {
                notifications.show({
                  withCloseButton: true,
                  autoClose: 1500,
                  message: `Thêm thành công tài khoản: ${username} `,
                  color: "teal",
                  icon: <IconCheck />,
                  className: "my-notification-class",
                  loading: false,
                });
              })
              .catch((e) => {
                notifications.show({
                  withCloseButton: true,
                  autoClose: 1500,
                  message: `Thêm không thành công tài khoản`,
                  color: "red",
                  icon: <IconX />,
                  className: "my-notification-class",
                  loading: false,
                });
              });

            modals.closeAll();
            // await handleCreateUser();
          }}
        >
          Đăng ký
        </Button>
      </div>
    </div>
  );
};

export default FormUserAdmin;
