import React from "react";
import Product from ".";
import { Brand, ProductItems } from "../../Pages/HomePage/Content";
import { Flex } from "@mantine/core";

function ProductListNoButtonMore(props: { brands: Brand[] }) {
  return (
    <>
      <div className="product-list-detail" style={{ marginTop: "30px" }}>
        {props.brands.map((e) => {
          return (
            <Flex direction={'column'}>
              <div className="title">{e.brandName}</div>
              <div key={e.id}>
                <Product products={e.products} />
              </div>
            </Flex>
          );
        })}
      </div>
    </>
  );
}
export default ProductListNoButtonMore;
