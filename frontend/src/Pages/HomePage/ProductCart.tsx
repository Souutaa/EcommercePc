import Navbar from "../../Layouts/NavBar";
import ProductCarts from "../../Components/Product/ProductCart";
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
          <div className="productcart-right"></div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
