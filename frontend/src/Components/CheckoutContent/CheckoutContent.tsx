import { useShopingContext } from "../../Context/ShoppingContext";
import formatPrice from "../../Helper/formatPrice";
import ProductOrderNotItem from "../../Pages/ProductOdered/ProductOrderNotItem";
import styled from ".//CheckoutContent.module.css";
function CheckoutContent() {
  const { cartItems } = useShopingContext();
  return (
    <>
      {cartItems.map((item) => {
        return (
          <div
            key={item.id}
            className={`${styled["product-checkout__content"]} div-8-col`}
          >
            <div className={styled["product-checkout__info"]}>
              <div className={styled["product-checkout__name"]}>
                {item.productName}
              </div>
              <span className={styled["product-checkout__color"]}>
                Màu sắc: Black
              </span>
            </div>

            <div className={styled["product-checkout__quality"]}>
              {item.quantity}
            </div>
            <div className={styled["product-checkout__price"]}>
              {formatPrice(item.price)}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CheckoutContent;
