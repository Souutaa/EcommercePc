import Product from "./Product";
import { Brand, Category, ProductItems } from "../../Pages/HomePage/Content";
import ButtonMore from "../Button/button-more";
function ProductListFollowCategory(props: { products: ProductItems[] }) {
  return (
    <>
      <Product products={props.products} />
    </>
  );
}

export default ProductListFollowCategory;
