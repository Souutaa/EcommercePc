import { ProductDetailType } from "../../../Pages/ProductDetail/ProductDetail";
import styled from ".//ProductInfo.module.css";

function ProductInfo(props: ProductDetailType) {
  return (
    <>
      <div className={styled["product-detail-info"]}>
        <h1 className={styled["product-detail-text"]}>
          {props.product.productName}
        </h1>
        <div className={styled["product-detail-features"]}>
          {props.productInfos.map((e) => {
            return (
              <div key={e.id} className={styled["product-detail-feature"]}>
                <img
                  className={styled["product-detail-feature-icon"]}
                  src="/img/badge-check.png"
                  alt=""
                />
                <span className={styled["product-detail-feature-text"]}>
                  {e.productInformation}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
