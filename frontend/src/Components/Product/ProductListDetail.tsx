import Product from "./Product";
import { ProductItems } from "../../Pages/HomePage/Content";
import ButtonMore from "../Button/button-more";
function ProductListDetail(props: { products: ProductItems[]; name: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ paddingBottom: "1.6rem" }}>
        <Product products={props.products} />
      </div>
      <ButtonMore categoryName={props.name} />
    </div>
  );
}

export default ProductListDetail;
