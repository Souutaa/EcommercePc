import React from "react";
import Product from ".";
import { ProductItems } from "../../Pages/HomePage/Content";

function ProductListNoButtonMore(props: { products: ProductItems[] }) {
  return (
    <>
      <div className="product-list-detail" style={{ marginTop: "30px" }}>
        <Product products={props.products} />
      </div>
    </>
  );
}
export default ProductListNoButtonMore;
