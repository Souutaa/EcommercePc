import { Button } from "@mantine/core";
import { Input } from "@mantine/core";
import { Link } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import { useEffect, useState } from "react";
import axios from "axios";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const forgetPassword = () => {
    const data = { email: email, username: username };
    axios.patch("http://localhost:8080/mail/sendmail", data).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        alert(`OTP đã được gửi đến mail: ${email}`);
        console.log(res.data);
      }
    });
  };
  return (
    <>
      <form className="modal-form-signin" action="">
        <h2 className="text-signin">Quên mật khẩu</h2>
        <div className="form-signin">
          <div className="form-group">
            <label className="form-text" htmlFor="">
              Tên đăng nhập
            </label>
            <Input.Wrapper>
              <Input
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Input.Wrapper>

            <label className="form-text" htmlFor="">
              Mail đăng kí
            </label>
            <Input.Wrapper>
              <Input
                placeholder="abc@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Input.Wrapper>
          </div>

          <Link style={{ textDecoration: "none" }} to={PATHS.LOGIN.FPVERIFI}>
            <div className="form-group margin-bottom">
              <Button onClick={() => forgetPassword()}>Nhận mã xác nhận</Button>
            </div>
          </Link>
        </div>
      </form>
    </>
  );
}

export default ForgotPassword;
