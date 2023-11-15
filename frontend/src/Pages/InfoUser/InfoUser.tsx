import { Avatar, Button, Input } from "@mantine/core";
import UserInfor from "../../Components/UserInfor/UserInfor";
import Navbar from "../../Layouts/NavBar";
import UserOder from "../../Components/UserOrder/UserOrder";
import CheckoutGrid from "../../Components/InputGrid/InputGrib4";
import Seaparator from "../../Components/Seaparator/Seaparator";
import InputGrid2 from "../../Components/InputGrid/InputGrid2";
import InputGrib4 from "../../Components/InputGrid/InputGrib4";

function InfoUser() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="infouser-content">
          <div className="infouser-sidebar">
            <div className="infouser-avatar">
              <Avatar style={{ marginTop: "20px" }}></Avatar>
              <div className="margin-right">
                <UserInfor />
              </div>
            </div>
            <UserOder />
          </div>
          <div className="infouser-container">
            <h3 className="infouser-title">Hồ sơ của tôi</h3>
            <h5 className="infouser-text">
              Quản lý thông tin hồ sơ để bảo mật tài khoản
            </h5>
            <Seaparator />
            <form action="">
              <div className="infouser-input">
                <InputGrid2 />
                <InputGrib4 />
              </div>
              <div className="infouser-input">
                <span className="infouser-text-input">Địa chỉ chi tiết:</span>
                <Input.Wrapper>
                  <Input placeholder="208 Trần Bình Trọng" />
                </Input.Wrapper>
              </div>
              <Button style={{ display: "flex", margin: "6px 40px 40px 40px" }}>
                Thay đổi
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoUser;
