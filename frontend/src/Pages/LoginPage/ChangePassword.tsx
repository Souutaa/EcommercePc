import { PasswordInput, Button } from "@mantine/core";
function ChangePassword() {
  return (
    <>
      <form className="modal-form-signin" action="">
        <h2 className="text-signin">Đổi mật khẩu</h2>
        <div className="form-signin">
          <div className="form-group">
            <label className="form-text " htmlFor="">
              Mật khẩu mới
            </label>
            <PasswordInput placeholder="Nhập mật khẩu mới" />
          </div>
          <div className="form-group">
            <label className="form-text " htmlFor="">
              Xác nhận mật khẩu mới
            </label>
            <PasswordInput placeholder="Nhập lại mật khẩu mới" />
          </div>
          <div className="form-group margin-bottom">
            <Button>Đi tới trang chủ</Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ChangePassword;
