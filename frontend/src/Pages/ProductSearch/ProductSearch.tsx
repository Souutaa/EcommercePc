import { Pagination, Title, Text } from "@mantine/core";
import ProductSearchs from "../../Components/Product/ProductSearch";
import Navbar from "../../Layouts/NavBar";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

function ProductSearch() {
  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <Title order={3} style={{ textAlign: "left" }}>
          Kết qua tìm kiếm cho{" "}
          <Text span c="blue" inherit>
            "Laptop Acer"
          </Text>{" "}
        </Title>
        ;
        <ProductSearchs />
        <ProductSearchs />
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
