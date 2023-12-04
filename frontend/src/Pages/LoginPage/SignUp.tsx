import { Button, Input, PasswordInput } from "@mantine/core";

import "@mantine/carousel/styles.css";
import { useState } from "react";
import axios from "axios";

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

  const handleCreateUser = () => {
    const response = axios.post("http://127.0.0.1:8080/auth/register", data);
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
