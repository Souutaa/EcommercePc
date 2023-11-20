import { Button } from "@mantine/core";
import Navbar from "../../Layouts/NavBar";
import { Link } from "react-router-dom";

function ProductOrderNotItem() {
  return (
    <>
      <Navbar />
      <div className="productodered">
        <img src="/img/Cartillustartion.png" alt="" />
        <div className="productodered-content">
          <span className="productodered-title">
            Không có sản phẩm nào trong giỏ hàng
          </span>
          <span className="productodered-text">
            Để tiến hành mua sắm và đặt hàng
          </span>
        </div>
        <Link to="/">
          <Button>Quay lại trang chọn sản phẩm cần mua</Button>
        </Link>
      </div>
    </>
  );
}

export default ProductOrderNotItem;
