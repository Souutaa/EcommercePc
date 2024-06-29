import { Button, PinInput } from "@mantine/core";
import { Link } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import styled from ".//LoginPage.module.css";
import { useMemo, useState } from "react";
function ForgotPasswordVerification() {
  const [pin, setPin] = useState("");

  const setOTP = async () => {
    localStorage.removeItem("otp");
    console.log(pin);
    await localStorage.setItem("otp", pin);
  };
  return (
    <>
      <form className={styled["modal-form-sign-in"]} action="">
        <h2 className={styled["text-sign-in"]}>Nhập mã xác nhận</h2>
        <div className={styled["form-sign-in"]}>
          <div className="form-group ">
            <PinInput
              type={"number"}
              style={{
                justifyContent: "center",
              }}
              radius={"lg"}
              length={6}
              size="xl"
              placeholder="-"
              onChange={(e) => {
                setPin(e);
              }}
            ></PinInput>
          </div>

          <Link
            to={PATHS.LOGIN.CHANGE}
            style={{ textDecoration: "none" }}
            onClick={() => {
              setOTP();
            }}
          >
            <div className="form-group margin-bottom">
              <Button size="xl" radius={"lg"}>
                Đổi mật khẩu
              </Button>
            </div>
          </Link>
        </div>
      </form>
    </>
  );
}

export default ForgotPasswordVerification;
