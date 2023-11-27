import React from "react";
import Product from ".";
import { Brand, ProductItems } from "../../Pages/HomePage/Content";
import ButtonMore from "../Button/button-more";

function ProductListNoButtonMore(props: { brands: Brand[], category: string }) {
  const productListNoButtonMore = props.brands.map((e) => {
    return e.products;
  });

  const brandName = props.brands.map((e) => {
    return e.brandName;
  });
  return (
    <>
      <div className="product-list-detail" style={{ marginTop: "30px" }}>
        {props.brands.map((e) => {
          return (
            <div>
              <div key={e.id} className="title">
                {e.brandName}
              </div>
              {/* <Product products={productListNoButtonMore.flat()} /> */}
              <Product products={e.products} />
              <ButtonMore brandName={e.brandName} categoryName={props.category}  />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ProductListNoButtonMore;
