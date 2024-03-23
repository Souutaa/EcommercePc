import Product from "./Product";
import { Brand } from "../../Pages/HomePage/Content";
import ButtonMore from "../Button/button-more";

function ProductListNoButtonMore(props: { brands: Brand[]; category: string }) {
  return (
    <>
      <div style={{ margin: "2.4rem 0" }}>
        {props.brands.map((e) => {
          return (
            <div style={{ textAlign: "center" }}>
              <div key={e.id} className="title">
                {e.brandName}
              </div>
              <Product products={e.products} />
              <ButtonMore
                brandName={e.brandName}
                categoryName={props.category}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ProductListNoButtonMore;
