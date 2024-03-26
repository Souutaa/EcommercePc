import { Button, Flex, Input, PasswordInput } from "@mantine/core";

import "@mantine/carousel/styles.css";
import { useState } from "react";
import axios from "axios";
import { IconChecklist, IconLoader, IconX } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import API_ADDRESS from "../../Api_Address";
import styled from ".//LoginPage.module.css";

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
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();
  const data = {
    username: username,
    password: password,
    confirmPassword: confirmPassword,
    email: email,
  };

  const handleCreateUser = async () => {
    try {
      notifications.show({
        withCloseButton: true,
        autoClose: 1500,
        message: "Vui lòng đợi",
        color: "teal",
        icon: <IconLoader />,
        className: "my-notification-class",
        loading: true,
      });
      const response = await axios.post(
        `http://${API_ADDRESS}:8080/auth/register`,
        data
      );
      setTimeout(() => {
        notifications.show({
          withCloseButton: true,
          autoClose: 1500,
          message: "Đăng kí thành công!",
          color: "green",
          icon: <IconChecklist />,
          className: "my-notification-class",
          loading: false,
          onClose: () => {
            notifications.clean();
            navigate(PATHS.LOGIN.INDEX);
          },
        });
      }, 1000);
    } catch (err: any) {
      notifications.clean();
      if (err.response.data.detail)
        notifications.show({
          withCloseButton: true,
          autoClose: 3000,
          message: err.response.data.detail,
          color: "red",
          icon: <IconX />,
          className: "my-notification-class",
          loading: false,
        });
      else {
        setErrors(
          Object.keys(err.response.data).map((key) => {
            return key + ": " + err.response.data[key];
          })
        );
      }
    }
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
      <form className={styled["modal-form-sign-in"]} action="">
        <h2 className={styled["text-sign-in"]}>Đăng ký</h2>
        {errors.length > 0 && (
          <Flex direction={"column"} gap={"md"}>
            {errors.map((error) => (
              <div style={{ color: "red", width: "100%" }}>{error}</div>
            ))}
          </Flex>
        )}
        <div className={styled["form-sign-in"]}>
          <div className="form-group">
            <label className="form-text" htmlFor="">
              Username
            </label>
            <Input.Wrapper error={errorHandleInputUsername}>
              <Input
                size="xl"
                radius={"lg"}
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
                size="xl"
                radius={"lg"}
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
              size="xl"
              radius={"lg"}
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
              size="xl"
              radius={"lg"}
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
            <Button size="xl" radius={"lg"} onClick={handleCreateUser}>
              Đăng ký
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
