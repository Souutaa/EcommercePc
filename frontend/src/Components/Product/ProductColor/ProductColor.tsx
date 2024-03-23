import { Group, ColorSwatch } from "@mantine/core";
import { useState } from "react";
import { ProductItem } from "../Product";
import formatPrice from "../../../Helper/formatPrice";
import { ProductDetailType } from "../../../Pages/ProductDetail/ProductDetail";
import styled from ".//ProductColor.module.css";

function ProductColor(props: { product: ProductItem; warrantyPeriod: number }) {
  return (
    <>
      <div className={styled["product-detail-attribute"]}>
        <div className={styled["product-detail-price"]}>
          <div className={styled["product-detail-warranty"]}>
            Thời gian bảo hành: {props.warrantyPeriod} tháng
          </div>
          <span className={styled["product-detail-price-old"]}>
            {formatPrice(
              props.product.price + props.product.price / props.product.discount
            )}
          </span>
          <span className={styled["product-detail-price-new"]}>
            {formatPrice(props.product.price)}
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductColor;
