import { Button } from "@mantine/core";
import { Input } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import { useEffect, useState } from "react";
import axios from "axios";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconLoader, IconX } from "@tabler/icons-react";
import API_ADDRESS from "../../Api_Address";
import styled from ".//LoginPage.module.css";

function ForgotPassword() {
  const navigate = useNavigate();
  const [errorHandleInputMail, setErrorHandleInputMail] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);

  const forgetPassword = async () => {
    notifications.show({
      withCloseButton: true,
      autoClose: 1000,
      message: `Đang kiểm tra mail: ${email}`,
      color: "teal",
      icon: <IconLoader />,
      className: "my-notification-class",
      loading: true,
    });
    localStorage.removeItem("mail");
    const data = { email: email };
    setDisabled(true);

    await axios
      .patch(`http://${API_ADDRESS}:8080/mail/sendmail`, data)
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          localStorage.setItem("mail", res.data.email);
          notifications.show({
            withCloseButton: true,
            autoClose: 2000,
            message: `Đã gửi mã OTP đến mail: ${res.data.email}`,
            color: "teal",
            icon: <IconCheck />,
            className: "my-notification-class",
            loading: false,
          });
          setDisabled(false);
          navigate(PATHS.LOGIN.FPVERIFI);
        }
      })
      .catch((e) => {
        notifications.show({
          withCloseButton: true,
          autoClose: 2000,
          message: "Mail không tồn tại, vui lòng kiểm tra lại",
          color: "red",
          icon: <IconX />,
          className: "my-notification-class",
          loading: false,
        });
        setDisabled(false);
      });
  };

  const inputMailHandle = (e: string) => {
    if (!e) {
      setErrorHandleInputMail("Vui lòng nhập mail: *****@*mail.com");
    } else {
      setErrorHandleInputMail("");
    }
  };

  return (
    <>
      <form className={styled["modal-form-sign-in"]} action="">
        <h2 className={styled["text-sign-in"]}>Quên mật khẩu</h2>
        <div className={styled["form-sign-in"]}>
          <div className="form-group">
            <label className="form-text" htmlFor="">
              Mail đăng kí
            </label>
            <Input.Wrapper error={errorHandleInputMail}>
              <Input
                size="xl"
                radius={"lg"}
                error={errorHandleInputMail}
                placeholder="abc@gmail.com"
                onChange={(e) => {
                  inputMailHandle(e.target.value);
                  setEmail(e.target.value);
                }}
              />
            </Input.Wrapper>
          </div>

          <>
            <div className="form-group margin-bottom">
              <Button
                size="xl"
                radius={"lg"}
                disabled={disabled}
                onClick={() => {
                  forgetPassword();
                }}
              >
                Nhận mã xác nhận
              </Button>
            </div>
          </>
        </div>
      </form>
    </>
  );
}

export default ForgotPassword;
