import styled from ".//CartText.module.css";
function CartText() {
  return (
    <div className={`${styled["product-cart__text"]} div-16-col`}>
      <span style={{ textAlign: "left", gridColumn: "1/4" }}>Hình ảnh</span>
      <span style={{ textAlign: "left", gridColumn: "4/10" }}>
        Tên sản phẩm
      </span>
      <span style={{ textAlign: "left", gridColumn: "10/13" }}>Giá bán</span>
      <span
        style={{
          textAlign: "left",
          gridColumn: "13/16",
        }}
      >
        Số lượng
      </span>
      <span style={{ textAlign: "left", gridColumn: "16/17" }}></span>
    </div>
  );
}

export default CartText;
