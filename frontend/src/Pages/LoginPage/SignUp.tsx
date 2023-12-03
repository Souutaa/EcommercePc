import { Button, Input, PasswordInput } from "@mantine/core";

import "@mantine/carousel/styles.css";
import { useState } from "react";
import axios from "axios";

function SignUp() {
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

  const handleCreateUser = () => {
    const response = axios.post("http://127.0.0.1:8080/auth/register", data);
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
            <Input.Wrapper>
              <Input
                placeholder="Nguyễn Văn A"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Input.Wrapper>
          </div>
          <div className="form-group">
            <label className="form-text" htmlFor="">
              Email
            </label>
            <Input.Wrapper>
              <Input
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Input.Wrapper>
          </div>

          <div className="form-group">
            <label className="form-text " htmlFor="">
              Mật khẩu
            </label>
            <PasswordInput
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-text " htmlFor="">
              Nhập lại mật khẩu
            </label>
            <PasswordInput
              placeholder="Nhập lại mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
