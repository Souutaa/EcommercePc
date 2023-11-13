function Total() {
  return (
    <>
      <div className="productcart-detail">
        <div className="productcart-total">
          <span className="productcart-texts">Tổng</span>
          <span className="productcart-number">62.170.000₫</span>
        </div>
        <div className="productcart-sale-all">
          <span className="productcart-texts">Giảm giá</span>
          <span className="productcart-number-sale">-2.170.000₫</span>
        </div>
        <div className="productcart-total-all">
          <span className="productcart-text">Tổng cộng:</span>
          <span className="productcart-number-total">60.000.000₫</span>
        </div>
      </div>
    </>
  );
}

export default Total;
