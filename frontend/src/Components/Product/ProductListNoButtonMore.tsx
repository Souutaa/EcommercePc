import React from "react";
import Product from ".";
import { Brand, ProductItems } from "../../Pages/HomePage/Content";

function ProductListNoButtonMore(props: { brands: Brand[] }) {
  return (
    <>
      <div className="product-list-detail" style={{ marginTop: "30px" }}>
        {props.brands.map((e) => {
          return (
            <div key={e.id}>
              <div className="title">{e.brandName}</div>;
              <Product products={e.products} />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ProductListNoButtonMore;
