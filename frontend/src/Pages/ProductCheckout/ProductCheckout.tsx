import { Input, Radio, Group, Divider } from "@mantine/core";
import CheckoutGrid from "../../Components/InputGrid/InputGrib4";
import Total from "../../Components/Total/Total";
import Btn from "../../Components/Button";
import { Link } from "react-router-dom";
import CheckoutContent from "../../Components/CheckoutContent/CheckoutContent";
import CheckoutText from "../../Components/CheckoutText/CheckoutText";
import { PATHS } from "../../Constants/path";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumb";

function ProductCheckout() {
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
              <div className="productcheckout-input">
                <span className="productcheckput-text">Họ và tên:</span>
                <Input.Wrapper>
                  <Input placeholder="Nguyễn Văn A" />
                </Input.Wrapper>
              </div>
              <CheckoutGrid />
              <div className="productcheckout-input">
                <span className="productcheckput-text">Địa chỉ chi tiết:</span>
                <Input.Wrapper>
                  <Input placeholder="Số nhà, tên đường, xã, phường, thị trấn,..." />
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
