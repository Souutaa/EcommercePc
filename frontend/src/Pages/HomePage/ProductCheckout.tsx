import { Input, Radio, Group, Divider } from "@mantine/core";
import Navbar from "../../Layouts/NavBar";
import CheckoutGrid from "../../Components/CheckoutGrid";
import Total from "../../Components/Total";

function ProductCheckout() {
  return (
    <>
      <div className="container">
        <Navbar />
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
                <button className="productcheckout-fix">Sửa giỏ hàng</button>
                <button className="productcheckout-oder">Đặt hàng</button>
              </div>
            </form>
          </div>
          <div className="productcheckout-right">
            <div className="productcheckout-right-title">
              <span
                style={{ width: "158px", textAlign: "left" }}
                className="productcheckout-right-text"
              >
                Tên sản phẩm
              </span>
              <span
                style={{ width: "80px", textAlign: "center" }}
                className="productcheckout-right-text"
              >
                Số Lượng
              </span>
              <span
                style={{ width: "128px", textAlign: "right" }}
                className="productcheckout-right-text"
              >
                Giá bán
              </span>
            </div>

            <div className="productcheckout-content">
              <div className="productcheckout-info">
                <div className="productcheckout-name">
                  Laptop Gaming Acer Nitro 5 Eagle AN515-57-54MV
                </div>
                <span className="productcheckout-color">Màu sắc: Black</span>
              </div>

              <div className="productcheckout-quality">1</div>
              <div className="productcheckout-price">24.190.000₫</div>
            </div>
            <div className="productcheckout-content">
              <div className="productcheckout-info">
                <div className="productcheckout-name">
                  Laptop Gaming Acer Nitro 5 Eagle AN515-57-54MV
                </div>
                <span className="productcheckout-color">Màu sắc: Black</span>
              </div>

              <div className="productcheckout-quality">1</div>
              <div className="productcheckout-price">20.990.000₫</div>
            </div>
            <div className="productcheckout-content">
              <div className="productcheckout-info">
                <div className="productcheckout-name">
                  Laptop Gaming Acer Nitro 5 Eagle AN515-57-54MV
                </div>
                <span className="productcheckout-color">Màu sắc: Black</span>
              </div>

              <div className="productcheckout-quality">1</div>
              <div className="productcheckout-price">16.990.000₫</div>
            </div>
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
