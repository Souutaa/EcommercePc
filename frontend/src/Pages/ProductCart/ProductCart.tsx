import ProductCarts from "../../Components/Product/ProductCart/ProductCart";
import { Input, Checkbox } from "@mantine/core";
import ProductList from "../../Components/Product/ProductList";
import Total from "../../Components/Total/Total";
import Btn from "../../Components/Button";
import { Link } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import CartText from "../../Components/CartText/CartText";
import NoProduct from "../NoProduct/NoProduct";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import styled from ".//ProductCart.module.css";

function ProductCart() {
  return (
    <>
      {localStorage.getItem("shopping_cart")?.localeCompare("[]") ? (
        <>
          <div className="container">
            <Breadcrumbs />
            <div className={styled["product-cart"]}>
              <div className={styled["product-cart--left"]}>
                <CartText />
                <ProductCarts />
              </div>
              <div className={styled["product-cart--right"]}>
                <div className={styled["product-cart__sale"]}>
                  <Input
                    size="md"
                    className={styled["product-cart__input"]}
                    placeholder="Mã giảm giá"
                  />
                  <Btn
                    maintine="a"
                    customStyle={{ marginTop: "16px" }}
                    color="#E5E7EB"
                  >
                    Thêm
                  </Btn>
                </div>
                <div className={styled["product-cart__body"]}>
                  <Total />
                  <div className={styled["product-cart__provision"]}>
                    <Checkbox
                      defaultChecked
                      label="Tôi đã đọc và đồng ý với điều khoản và điều kiện của website"
                    />
                  </div>
                  <Link style={{ width: "100%" }} to={PATHS.PAYMENT}>
                    <div className={styled["product-cart__payment"]}>
                      <Btn maintine="a" customStyle={{ width: "100%" }}>
                        Thanh toán
                      </Btn>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-more">
              <div className="product-more-text">Có thể bạn tìm kiếm</div>
              {/* <ProductList /> */}
            </div>
          </div>
        </>
      ) : (
        <NoProduct />
      )}
    </>
  );
}

export default ProductCart;
