import { Button } from "@mantine/core";
import Navbar from "../../Layouts/NavBar";
import { Link } from "react-router-dom";

function ProductOdered() {
  return (
    <>
      <Navbar />
      <div className="productodered">
        <img src="/img/Cartillustartion.png" alt="" />
        <div className="productodered-content">
          <span className="productodered-title">Đặt hàng thành công</span>
          <span className="productodered-text">
            Đặt hàng thành công, các sản phẩm sẽ đến với bạn sau ít ngày giao
            hàng
          </span>
        </div>
        <Link to="/">
          <Button>Tiếp tục mua sản phẩm</Button>
        </Link>
      </div>
    </>
  );
}

export default ProductOdered;
