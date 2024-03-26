import { PasswordInput, Button } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import axios from "axios";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import API_ADDRESS from "../../Api_Address";
import styled from ".//LoginPage.module.css";
function ChangePassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorHandleInputPassConfirm, setErrorHandleInputPassConfirm] =
    useState("");
  const [errorHandleInputPass, setErrorHandleInputPass] = useState("");

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
      .patch(`http://${API_ADDRESS}:8080/user/${mail}/updatepassword`, data)
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          //alert(`Đổi mật khẩu thành công`);
          //console.log("lettgo", res.data);
          notifications.show({
            withCloseButton: true,
            autoClose: 1500,
            message: `Đổi mật khẩu thành công`,
            color: "teal",
            icon: <IconCheck />,
            className: "my-notification-class",
            loading: false,
          });
          localStorage.removeItem("mail");
          localStorage.removeItem("otp");
          navigate(PATHS.LOGIN.INDEX);
        }
      })
      .catch((e) => {
        notifications.show({
          withCloseButton: true,
          autoClose: 2500,
          message:
            "OTP sai hoặc mật khẩu mới và mật khẩu nhập lại không giống nhau, vui lòng kiểm tra lại",
          color: "red",
          icon: <IconX />,
          className: "my-notification-class",
          loading: false,
        });
        navigate(PATHS.LOGIN.FPVERIFI);
      });
  };

  const inputPassConfirmHandle = (e: string) => {
    if (!e) {
      setErrorHandleInputPassConfirm("Vui lòng nhập lại Password");
    } else {
      setErrorHandleInputPassConfirm("");
    }
  };

  const inputPassHandle = (e: string) => {
    if (!e) {
      setErrorHandleInputPass("Vui lòng nhập Password");
    } else {
      setErrorHandleInputPass("");
    }
  };

  return (
    <>
      <form className={styled["modal-form-sign-in"]} action="">
        <h2 className={styled["text-sign-in"]}>Đổi mật khẩu</h2>
        <div className={styled["form-sign-in"]}>
          <div className="form-group">
            <label className="form-text " htmlFor="">
              Mật khẩu mới
            </label>
            <PasswordInput
              size="xl"
              radius={"lg"}
              error={errorHandleInputPass}
              placeholder="Nhập mật khẩu mới"
              onChange={(e) => {
                inputPassHandle(e.target.value);
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label className="form-text " htmlFor="">
              Xác nhận mật khẩu mới
            </label>
            <PasswordInput
              size="xl"
              radius={"lg"}
              error={errorHandleInputPassConfirm}
              placeholder="Nhập lại mật khẩu mới"
              onChange={(e) => {
                inputPassConfirmHandle(e.target.value);
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          <div className="form-group margin-bottom">
            <Button
              size="xl"
              radius={"lg"}
              onClick={async () => forgetPassword()}
            >
              Xác nhận
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ChangePassword;
