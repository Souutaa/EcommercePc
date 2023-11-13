import { Button } from "@mantine/core";
import { Input } from "@mantine/core";
import { Link } from "react-router-dom";
import { PATHS } from "../../Contants/path";
function ForgotPassword() {
  return (
    <>
      <form className="modal-form-signin" action="">
        <h2 className="text-signin">Quên mật khẩu</h2>
        <div className="form-signin">
          <div className="form-group">
            <label className="form-text" htmlFor="">
              Tài Khoản
            </label>
            <Input.Wrapper>
              <Input placeholder="abc@gmail.com" />
            </Input.Wrapper>
          </div>

          <Link style={{ textDecoration: "none" }} to={PATHS.LOGIN.FPVERIFI}>
            <div className="form-group margin-bottom">
              <Button>Nhận mã xác nhận</Button>
            </div>
          </Link>
        </div>
      </form>
    </>
  );
}

export default ForgotPassword;
