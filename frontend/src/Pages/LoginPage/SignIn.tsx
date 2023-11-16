import { Carousel } from "@mantine/carousel";
import { Button } from "@mantine/core";
import { Input, PasswordInput } from "@mantine/core";
import "@mantine/carousel/styles.css";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import { useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";

const images = [
  "/img/Carousel1.png",
  "/img/Carousel1.png",
  "/img/Carousel1.png",
];

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authContext = useAuthContext();

  const slides = images.map((url, index) => {
    return (
      <Carousel.Slide key={index}>
        <img alt="" src={url} />
      </Carousel.Slide>
    );
  });

  return (
    <>
      <div className="modal">
        <div className="modal-carousel">
          <Carousel withIndicators>{slides}</Carousel>
        </div>
        <div className="modal-login">
          <h2 className="login-text">Đăng Nhập</h2>

          <form className="modal-form-login" action="">
            <div className="form-group">
              <label className="form-text" htmlFor="">
                Tài khoản
              </label>
              <Input.Wrapper>
                <Input
                  placeholder="abc@gmail.com"
                  onChange={(e) => {
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
                placeholder="Nhập mật khẩu"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <Button
                onClick={() => {
                  authContext.login({ username, password });
                  navigate("/");
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
              <h3 className="text-noaccount">Bạn chưa có tài khoản?</h3>
              <Link to={PATHS.LOGIN.SIGNUP}>
                <Button className="button-signin" style={{ width: "100%" }}>
                  Đăng ký ngay
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
