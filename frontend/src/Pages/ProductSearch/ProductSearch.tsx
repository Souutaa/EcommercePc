import { Pagination, Title, Text } from "@mantine/core";
import ProductSearchs from "../../Components/Product/ProductSearch";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumb";
import FilterSection from "../../Components/FilterSection/FilterSection";

function ProductSearch() {
  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <FilterSection />

        <ProductSearchs />
        <ProductSearchs />

        <ProductSearchs />

        <ProductSearchs />

        <div className="pagination-center">
          <Pagination total={10} />
        </div>
      </div>
    </>
  );
}

export default ProductSearch;
