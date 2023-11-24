import Product from ".";
import { Brand, ProductItems } from "../../Pages/HomePage/Content";
import ButtonMore from "../Button/button-more";
function ProductList(props: { brands: Brand[] }) {
  console.log("1231312312", props.brands);
  return (
    <>
      {props.brands.map((e) => {
        return (
          <>
            <div className="product-list-detail">
              <Product products={e.products} />
            </div>
            <ButtonMore />
          </>
        );
      })}
    </>
  );
}

export default ProductList;
