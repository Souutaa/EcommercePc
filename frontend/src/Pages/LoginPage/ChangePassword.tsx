import { PasswordInput, Button } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import axios from "axios";
import { useState } from "react";
function ChangePassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const forgetPassword = async () => {
    const otp = await localStorage.getItem("otp");
    const mail = await localStorage.getItem("mail");
    console.log(otp);
    console.log(mail);

    const data = {
      password: password,
      confirmPassword: confirmPassword,
      verificationCode: otp,
    };
    await axios
      .patch(`http://localhost:8080/user/${mail}/updatepassword`, data)
      .then((res) => {
        if (res.data.error) {
          alert("đổi mật khẩu không thành công " + res.data.error);
        } else {
          alert(`Đổi mật khẩu thành công`);
          console.log("lettgo", res.data);
          localStorage.removeItem("mail");
          localStorage.removeItem("otp");
        }
      });
    navigate(PATHS.LOGIN.INDEX);
  };
  return (
    <>
      <form className="modal-form-signin" action="">
        <h2 className="text-signin">Đổi mật khẩu</h2>
        <div className="form-signin">
          <div className="form-group">
            <label className="form-text " htmlFor="">
              Mật khẩu mới
            </label>
            <PasswordInput
              placeholder="Nhập mật khẩu mới"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label className="form-text " htmlFor="">
              Xác nhận mật khẩu mới
            </label>
            <PasswordInput
              placeholder="Nhập lại mật khẩu mới"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          <div className="form-group margin-bottom">
            <Button onClick={async () => forgetPassword()}>Xác nhận</Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ChangePassword;
