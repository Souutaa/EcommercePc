import ProductList from "../../Components/Product/ProductList";
import { Pagination } from "@mantine/core";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import FilterSection from "../../Components/FilterSection/FilterSection";
function ProductMore() {
  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <FilterSection />
        <div className="product">
          <div className="title">Acer</div>
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
        </div>
        <div className="pagination">
          <Pagination total={10} />
        </div>
      </div>
    </>
  );
}

export default ProductMore;
