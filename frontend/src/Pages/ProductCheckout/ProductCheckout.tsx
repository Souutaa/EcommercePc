import { Divider, Group, Input, Radio } from "@mantine/core";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import Btn from "../../Components/Button";
import CheckoutContent from "../../Components/CheckoutContent/CheckoutContent";
import CheckoutText from "../../Components/CheckoutText/CheckoutText";
import InputGrib4 from "../../Components/InputGrid/InputGrib4";
import Total from "../../Components/Total/Total";
import { PATHS } from "../../Constants/path";
import InputGrid2 from "../../Components/InputGrid/InputGrid2";
import axios from "axios";
import { useState, useEffect } from "react";
import { UserInformation } from "../InfoUser/InfoUser";

function ProductCheckout() {
  const [userInfo, setUserInfo] = useState<UserInformation | null>();
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8080/userDetail/default");
        setUserInfo(response.data);

      } catch {
        setUserInfo({
          accountDetail: {
            city: "1",
            district: "1",
            detailedAddress: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            id: null,
          },
          email: "",
          username: "",
        });
      }
    };
    getUserInfo();
  }, []);

  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <div className="productcheckout-title">
          <h1> Thông tin thanh toán</h1>
        </div>
        <div className="productcheckout-body">
          <div className="productcheckout-left">
            <form action="">
              <InputGrid2
                firstName={userInfo?.accountDetail.firstName ?? ""}
                lastName={userInfo?.accountDetail.lastName ?? ""}
              />
              <InputGrib4
                provinceCode={userInfo?.accountDetail.city ?? ""}
                districtCode={userInfo?.accountDetail.district ?? ""}
                email={userInfo?.email ?? ""}
                phoneNumber={userInfo?.accountDetail.phoneNumber ?? ""}
              />
              <div className="productcheckout-input">
                <span className="productcheckput-text">Địa chỉ chi tiết:</span>
                <Input.Wrapper>
                  <Input
                    placeholder="Số nhà, tên đường, xã, phường, thị trấn,..."
                    value={userInfo?.accountDetail.detailedAddress}
                  />
                </Input.Wrapper>
              </div>
              <div className="productcheckout-input">
                <span className="productcheckput-text">Ghi chú:</span>
                <Input.Wrapper>
                  <Input placeholder="Ghi chú cho shipper" />
                </Input.Wrapper>
              </div>
              <div className="productcheckout-receive">
                <span className="productcheckput-text">
                  Hình thức nhận hàng:
                </span>
                <div className="productcheckout-radio">
                  <Radio.Group name="favoriteFramework" withAsterisk>
                    <Group mt="xs">
                      <Radio value="" label="Nhận tại cửa hàng" />
                      <Radio value="" label="Giao hàng tận nơi" />
                    </Group>
                  </Radio.Group>
                </div>
              </div>
              <Divider my="sm" />
              <div className="productcheckout-button">
                <Link to={PATHS.CART}>
                  <Btn maintine="a" variant="default" color="#E5E7EB">
                    Sửa sản phẩm
                  </Btn>
                </Link>
                <Link
                  to={PATHS.ORDERED}
                  style={{ width: "100%", textDecoration: "none" }}
                >
                  <Btn fullWidth maintine="a">
                    Đặt hàng
                  </Btn>
                </Link>
              </div>
            </form>
          </div>
          <div className="productcheckout-right">
            <CheckoutText />
            <CheckoutContent />

            <div className="productcheckout-padding">
              <Total />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCheckout;
