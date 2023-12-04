import { Button, Input, PasswordInput } from "@mantine/core";

import "@mantine/carousel/styles.css";
import { useState } from "react";
import axios from "axios";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorHandleInputUsername, setErrorHandleInputUsername] = useState("");
  const [errorHandleInputPass, setErrorHandleInputPass] = useState("");
  const [errorHandleInputPassConfirm, setErrorHandleInputPassConfirm] =
    useState("");
  const [errorHandleInputMail, setErrorHandleInputMail] = useState("");

  const data = {
    username: username,
    password: password,
    confirmPassword: confirmPassword,
    email: email,
  };

  const handleCreateUser = async () => {
    await axios
      .patch("http://127.0.0.1:8080/auth/register", data)
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          localStorage.setItem("username", res.data.username);
          notifications.show({
            withCloseButton: true,
            autoClose: 2000,
            message: `Đăng ký thành công tài khoản: ${res.data.username}`,
            color: "teal",
            icon: <IconCheck />,
            className: "my-notification-class",
            loading: false,
          });
        }
      })
      .catch((e) => {
        notifications.show({
          withCloseButton: true,
          autoClose: 2000,
          message: "Thông tin đăng ký không hợp lệ",
          color: "red",
          icon: <IconX />,
          className: "my-notification-class",
          loading: false,
        });
      });
  };

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

  return (
    <>
      <form className="modal-form-signin" action="">
        <h2 className="text-signin">Đăng ký</h2>
        <div className="form-signin">
          <div className="form-group">
            <label className="form-text" htmlFor="">
              Username
            </label>
            <Input.Wrapper error={errorHandleInputUsername}>
              <Input
                error={errorHandleInputUsername}
                placeholder="nguyenvana"
                value={username}
                onChange={(e) => {
                  inputUsernameHandle(e.target.value);
                  setUsername(e.target.value);
                }}
              />
            </Input.Wrapper>
          </div>
          <div className="form-group">
            <label className="form-text" htmlFor="">
              Email
            </label>
            <Input.Wrapper error={errorHandleInputMail}>
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
          </div>

          <div className="form-group">
            <label className="form-text " htmlFor="">
              Mật khẩu
            </label>
            <PasswordInput
              error={errorHandleInputPass}
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => {
                inputPassHandle(e.target.value);
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label className="form-text " htmlFor="">
              Nhập lại mật khẩu
            </label>
            <PasswordInput
              error={errorHandleInputPassConfirm}
              placeholder="Nhập lại mật khẩu"
              value={confirmPassword}
              onChange={(e) => {
                inputPassConfirmHandle(e.target.value);
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          <div className="form-group margin-bottom">
            <Button onClick={handleCreateUser}>Đăng ký</Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
