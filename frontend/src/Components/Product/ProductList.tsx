import { useState } from "react";
import Product from "./Product/index";
import { Brand, Category, ProductItems } from "../../Pages/HomePage/Content";
import ButtonMore from "../Button/button-more";

function ProductList(props: { brands: Brand[]; name: string }) {
  const categoryItems = props.brands.map((e, index) => {
    return e.products;
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "2.4rem" }}>
        <Product products={categoryItems.flat()} />
      </div>
      <ButtonMore categoryName={props.name} />
    </div>
  );
}

export default ProductList;
