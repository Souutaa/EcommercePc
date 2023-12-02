import { Button } from "@mantine/core";
import { Input } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import { useEffect, useState } from "react";
import axios from "axios";
function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const forgetPassword = async () => {
    localStorage.removeItem("mail");
    const data = { email: email };
    await axios
      .patch("http://localhost:8080/mail/sendmail", data)
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          localStorage.setItem("mail", res.data.email);
          //alert(`OTP đã được gửi đến mail: ${email}`);
          // console.log(res.data.email);
          // console.log(res.data);
        }
      });
    navigate(PATHS.LOGIN.FPVERIFI);
  };
  return (
    <>
      <form className="modal-form-signin" action="">
        <h2 className="text-signin">Quên mật khẩu</h2>
        <div className="form-signin">
          <div className="form-group">
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

          <>
            <div className="form-group margin-bottom">
              <Button onClick={() => forgetPassword()}>Nhận mã xác nhận</Button>
            </div>
          </>
        </div>
      </form>
    </>
  );
}

export default ForgotPassword;
