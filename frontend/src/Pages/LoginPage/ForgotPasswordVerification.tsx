import { Button, PinInput } from "@mantine/core";
function ForgotPasswordVerification() {
  return (
    <>
      <form className="modal-form-signin" action="">
        <h2 className="text-signin">Nhập mã xác nhận</h2>
        <div className="form-signin">
          <div className="form-group ">
            <PinInput length={6} size="xl" placeholder="_"></PinInput>
          </div>

          <div className="form-group margin-bottom">
            <Button>Đổi mật khẩu</Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ForgotPasswordVerification;
