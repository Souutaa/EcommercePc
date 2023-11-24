import Product from ".";
import { Brand, ProductItems } from "../../Pages/HomePage/Content";
import ButtonMore from "../Button/button-more";
function ProductListDetail(props: { products: ProductItems[] }) {
  return (
    <>
      <div className="product-list-detail">
        <Product products={props.products} />
      </div>
      <ButtonMore />
    </>
  );
}

export default ProductListDetail;
