import { Button } from "@mantine/core";
import { Input, PasswordInput } from "@mantine/core";
function SignUp() {
  return (
    <>
      <form className="modal-form-signin" action="">
        <h2 className="text-signin">Đăng ký</h2>
        <div className="form-signin">
          <div className="form-group">
            <label className="form-text" htmlFor="">
              Họ và tên
            </label>
            <Input.Wrapper>
              <Input placeholder="Nguyễn Văn A" />
            </Input.Wrapper>
          </div>
          <div className="form-group">
            <label className="form-text" htmlFor="">
              Email
            </label>
            <Input.Wrapper>
              <Input placeholder="abc@gmail.com" />
            </Input.Wrapper>
          </div>

          <div className="form-group">
            <label className="form-text " htmlFor="">
              Mật khẩu
            </label>
            <PasswordInput placeholder="Nhập mật khẩu" />
          </div>
          <div className="form-group">
            <label className="form-text " htmlFor="">
              Nhập lại mật khẩu
            </label>
            <PasswordInput placeholder="Nhập lại mật khẩu" />
          </div>

          <div className="form-group margin-bottom">
            <Button>Đăng ký</Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
