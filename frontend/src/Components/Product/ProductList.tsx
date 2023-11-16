import Product from ".";
import ButtonAdd from "../Button/button-add-to-cart";
import ButtonMore from "../Button/button-more";
function ProductList() {
  return (
    <>
      <div className="product-list-detail">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <ButtonMore />
    </>
  );
}

export default ProductList;
