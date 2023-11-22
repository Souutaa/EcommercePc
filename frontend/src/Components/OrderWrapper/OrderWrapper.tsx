import { Link } from "react-router-dom";

function OrderWrapper() {
  return (
    <>
      <div className="infoorder-wrapper">
        <div className="infoorder-titles">
          <h4 className="infoorder-title ">Sản phẩm</h4>
          <h4 className="infoorder-title ">Số lượng</h4>
          <h4 className="infoorder-title ">Giá</h4>
          <h4 className="infoorder-title ">Tổng</h4>
        </div>
        <div className="infoorder-item">
          <Link
            style={{ textDecoration: "none" }}
            to=""
            className="infoorder-item-name "
          >
            Laptop MSI Gaming GF65 Thin 10UE i5 10500H/16GB/512GB/6GB RTX3060
            Max-Q/144Hz/Balo/Win10 (286VN)
            <br />
            <span className="infoorder-item-warranty">Hết bảo hành</span>
          </Link>
          <p className="infoorder-item-quantity ">1</p>
          <p className="infoorder-item-price ">29,490,000đ</p>
          <p className="infoorder-item-total-price ">29,490,000đ</p>
        </div>
      </div>
    </>
  );
}

export default OrderWrapper;
