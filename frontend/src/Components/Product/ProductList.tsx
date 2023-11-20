import Product from ".";
import { ProductItems } from "../../Pages/HomePage/Content";
import ButtonAdd from "../Button/button-add-to-cart";
import ButtonMore from "../Button/button-more";
function ProductList(props: { products: ProductItems[] }) {
  return (
    <>
      {/* {test.map((e) => {
        return (
          <>
            <div className="product-list-detail">
              <Product products={e.}
                // id={e.id}
                // discount={e.discount}
                // price={e.price}
                // productLine={e.productLine}
                // productName={e.productName}
                // thumbnailUri={e.thumbnailUri}
              />
            </div>
            <ButtonMore />
          </>
        );
      })} */}
      <div className="product-list-detail">
        <Product products={props.products} />
      </div>
      <ButtonMore />
    </>
  );
}

export default ProductList;
