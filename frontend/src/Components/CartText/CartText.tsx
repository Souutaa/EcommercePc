import styled from ".//CartText.module.css";
function CartText() {
  return (
    <div className={` ${styled["product-cart__text"]} grid-4-col`}>
      <span style={{ width: "", textAlign: "left" }}>Hình ảnh</span>
      <span style={{ width: "", textAlign: "left" }}>Tên sản phẩm</span>
      <span style={{ width: "", textAlign: "left" }}>Giá bán</span>
      <span style={{ width: "100px", textAlign: "left", marginRight: "70px" }}>
        Số lượng
      </span>
    </div>
  );
}

export default CartText;
