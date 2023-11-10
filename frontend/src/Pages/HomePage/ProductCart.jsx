import Navbar from "../../Layouts/NavBar";
import ProductCarts from "../../Components/Product/ProductCart";
import { Input, Checkbox } from "@mantine/core";
import ProductList from "../../Components/Product/ProductList";
import Total from "../../Components/Total";
function ProductCart() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="productcart">
          <div className="productcart-left">
            <div className="productcart-text">
              <span style={{ width: "112px", textAlign: "left" }}>
                Hình ảnh
              </span>
              <span style={{ width: "381px", textAlign: "left" }}>
                Tên sản phẩm
              </span>
              <span style={{ width: "200px", textAlign: "left" }}>Giá bán</span>
              <span style={{ width: "131px", textAlign: "left" }}>
                Số lượng
              </span>
            </div>
            <ProductCarts />
            <ProductCarts />
            <ProductCarts />
          </div>
          <div className="productcart-right">
            <div className="productcart-sale">
              <Input
                size="md"
                className="productcart-input"
                placeholder="Mã giảm giá"
              />
              <button className="productcart-button">Thêm</button>
            </div>
            <div className="productcart-body">
              <Total />
              <div className="productcart-provision">
                <Checkbox
                  defaultChecked
                  label="Tôi đã đọc và đồng ý với điều khoản và điều kiện của website"
                />
              </div>
              <div className="productcart-payment">
                <button className="button-payment"> Thanh toán</button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-more">
          <div className="product-more-text">Có thể bạn tìm kiếm</div>
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default ProductCart;
