import { Carousel } from "@mantine/carousel";
import { Button, MantineProvider, Notification } from "@mantine/core";
import { Input, PasswordInput } from "@mantine/core";
import "@mantine/carousel/styles.css";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { useFocusTrap } from "@mantine/hooks";
import styled from ".//LoginPage.module.css";

const images = [
  "/img/Carousel1.png",
  "/img/Carousel1.png",
  "/img/Carousel1.png",
];

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorHandleInputUsername, setErrorHandleInputUsername] = useState("");
  const [errorHandleInputPass, setErrorHandleInputPass] = useState("");
  const navigate = useNavigate();
  const authContext = useAuthContext();

  const slides = images.map((url, index) => {
    return (
      <Carousel.Slide key={index}>
        <img
          alt=""
          src={url}
          style={{ width: "100%", height: "auto", objectFit: "fill" }}
        />
      </Carousel.Slide>
    );
  });

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

  return (
    <MantineProvider>
      <div className={styled.modal}>
        <div className={styled["modal-carousel"]}>
          <Carousel
            withIndicators
            align={"center"}
            height={"56rem"}
            controlSize={56}
            style={{ fontSize: "2.4rem", borderRadius: "1.2rem" }}
          >
            {slides}
          </Carousel>
        </div>
        <div className={styled["modal-login"]}>
          <h2 className={styled["login-text"]}>Đăng Nhập</h2>

          <form className={styled["modal-form-login"]} action="">
            <div className="form-group">
              <label className="form-text" htmlFor="">
                Tài khoản
              </label>
              <Input.Wrapper error={errorHandleInputUsername}>
                <Input
                  size="xl"
                  radius={"lg"}
                  error={errorHandleInputUsername}
                  placeholder="abc@gmail.com"
                  onChange={(e) => {
                    inputUsernameHandle(e.target.value);
                    setUsername(e.target.value);
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
                onChange={(e) => {
                  inputPassHandle(e.target.value);
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <Button
                size="xl"
                radius={"lg"}
                onClick={(e) => {
                  localStorage.removeItem("accessToken");
                  authContext.login({ username, password });
                }}
              >
                Đăng nhập
              </Button>
              <Link
                style={{ textDecoration: "none" }}
                to={PATHS.LOGIN.FPASSWORD}
              >
                <label className="form-group-forgot" htmlFor="">
                  Quên mật khẩu?
                </label>
              </Link>
            </div>
            <div className="form-group">
              <div className="line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="412"
                  height="2"
                  viewBox="0 0 412 2"
                  fill="none"
                >
                  <path opacity="0.5" d="M0 1H412" stroke="#D1D5DB" />
                </svg>
              </div>
            </div>
            <div className="form-group">
              <h3 className={styled["text-no-account"]}>
                Bạn chưa có tài khoản?
              </h3>
              <Link to={PATHS.LOGIN.SIGNUP}>
                <Button
                  className="button-signin"
                  style={{ width: "100%" }}
                  size="xl"
                  radius={"lg"}
                >
                  Đăng ký ngay
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </MantineProvider>
  );
}

export default SignIn;
