import { Pagination } from "@mantine/core";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import ProductSearchs from "../../Components/Product/ProductSearch";
import { useCallback, useEffect, useState } from "react";
import { ProductItem } from "../../Components/Product";
import axios from "axios";

function ProductSearch() {
  const { search } = useParams();
  const [products, setProducts] = useState<ProductItem[]>([]);
  const fetchProducts = useCallback(async () => {
    if (search) {
      let data = JSON.stringify({
        search: "%" + search.split(" ").join("%") + "%",
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8080/product/search",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      setProducts(response.data);
    }
  }, [search]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <div className="container">
        <Breadcrumbs />
        {/* <FilterSection /> */}
        {products &&
          products.map((product) => <ProductSearchs product={product} />)}
        <div className="pagination-center">
          <Pagination total={10} />
        </div>
      </div>
    </>
  );
}

export default ProductSearch;
