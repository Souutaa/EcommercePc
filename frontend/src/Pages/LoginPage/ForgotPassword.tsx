import { Button } from "@mantine/core";
import { Input } from "@mantine/core";
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

          <div className="form-group margin-bottom">
            <Button>Nhận mã xác nhận</Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ForgotPassword;
