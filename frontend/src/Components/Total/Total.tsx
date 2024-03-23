import { useShopingContext } from "../../Context/ShoppingContext";
import formatPrice from "../../Helper/formatPrice";
import styled from ".//Total.module.css";

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
      <div className={styled["product-cart__detail"]}>
        <div className={styled["product-cart__total"]}>
          <span className={styled["product-cart__texts"]}>Tổng</span>
          <span className={styled["product-cart__number"]}>
            {formatPrice(totalPrice)}
          </span>
        </div>
        <div className={styled["product-cart__sale-all"]}>
          <span className={styled["product-cart__texts"]}>Giảm giá</span>
          <span className={styled["product-cart__number--sale"]}>
            -{formatPrice(totalDiscount)}
          </span>
        </div>
        <div className={styled["product-cart__total--all"]}>
          <span
            className={styled["product-cart__texts"]}
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "var(--gray-800, #1f2a37)",
            }}
          >
            Tổng cộng:
          </span>
          <span className={styled["product-cart__number--total"]}>
            {formatPrice(total)}
          </span>
        </div>
      </div>
    </>
  );
}

export default Total;
