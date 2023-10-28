import { useState, useCallback } from "react";
import { Button } from "@mantine/core";
import { useEventListener } from "@mantine/hooks";
function ProductCarts() {
  return (
    <>
      <div className="productcart-item">
        <div className="productcart-item-img">
          <img
            style={{ width: "94px", height: "94px" }}
            src="/img/Img.png"
            alt=""
          />
        </div>
        <div className="productcart-info">
          <div className="productcart-name">
            Laptop Gaming Acer Nitro 5 Eagle AN515-57-54MV
          </div>
          <span className="productcart-color">Màu sắc: Black</span>
          <span className="productcart-fix">Sửa</span>
        </div>
        <span className="productcart-price">24.190.000₫</span>
        <div className="productcart-width">
          <div className="productcart-quality">1</div>
        </div>
        <img src="/img/delete.png" alt="" className="productcart-delete" />
      </div>
    </>
  );
}

export default ProductCarts;
