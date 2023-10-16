import "./style.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Button } from "@mantine/core";
import Product from "../../Components/Product";

function Content() {
  return (
    <>
      <div className="container">
        <div className="products">
          <div className="tab-product">
            <ul className="tab-list">
              <li className="tab-text">Tất cả</li>
              <li className="tab-text">Văn phòng</li>
              <li className="tab-text">Gaming</li>
              <li className="tab-text active ">Đồ họa - Kỹ Thuật</li>
              <li className="tab-text">Cảm ứng</li>
            </ul>
          </div>
          <div className="title">Macbook</div>
          <div className="product-list">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <button className="more">Xem thêm</button>
          <div className="title">Acer</div>
          <div className="product-list">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <button className="more">Xem thêm</button>
          <div className="title">Asus</div>
          <div className="product-list">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <button className="more">Xem thêm</button>
          <div className="title">MSI</div>
          <div className="product-list">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <button className="more">Xem thêm</button>
        </div>
      </div>
    </>
  );
}
export default Content;
