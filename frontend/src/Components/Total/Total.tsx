import { useShopingContext } from "../../Context/ShoppingContext";

function Total() {
  const {
    cartItems,
    totalPrice,
    totalDiscount,
    increaseQty,
    decreaseQty,
    removeCartItem,
    clearCart,
  } = useShopingContext();
  const total = totalPrice - totalDiscount;
  return (
    <>
      <div className="productcart-detail">
        <div className="productcart-total">
          <span className="productcart-texts">Tổng</span>
          <span className="productcart-number">{totalPrice}</span>
        </div>
        <div className="productcart-sale-all">
          <span className="productcart-texts">Giảm giá</span>
          <span className="productcart-number-sale">-{totalDiscount}</span>
        </div>
        <div className="productcart-total-all">
          <span className="productcart-text">Tổng cộng:</span>
          <span className="productcart-number-total">{total}</span>
        </div>
      </div>
    </>
  );
}

export default Total;
