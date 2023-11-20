import Product from ".";
import { ProductItems } from "../../Pages/HomePage/Content";
import ButtonMore from "../Button/button-more";
function ProductList(props: { products: ProductItems[] }) {
  return (
    <>
      <div className="product-list-detail">
        <Product products={props.products} />
      </div>
      <ButtonMore />
    </>
  );
}

export default ProductList;
