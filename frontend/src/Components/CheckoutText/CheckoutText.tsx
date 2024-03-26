import styled from ".//CheckoutText.module.css";
function CheckoutText() {
  return (
    <>
      <div className={`${styled["product-checkout__right-title"]} div-8-col`}>
        <span
          style={{ gridColumn: "1/5" }}
          className={styled["product-checkout__right-text"]}
        >
          Tên sản phẩm
        </span>
        <span
          style={{ gridColumn: "5/7", justifySelf: "center  " }}
          className={styled["product-checkout__right-text"]}
        >
          Số Lượng
        </span>
        <span
          style={{ gridColumn: "7/9", justifySelf: "end" }}
          className={styled["product-checkout__right-text"]}
        >
          Giá bán
        </span>
      </div>
    </>
  );
}

export default CheckoutText;
