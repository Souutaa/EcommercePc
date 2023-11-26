import ProductList from "../../Components/Product/ProductList";
import { Pagination } from "@mantine/core";

import FilterSection from "../../Components/FilterSection/FilterSection";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { useLocation, useParams } from "react-router-dom";
import { ProductItem } from "../../Components/Product";
import ProductListNoButtonMore from "../../Components/Product/ProductListNoButtonMore";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductItems } from "../HomePage/Content";
import ProductListFollowCategory from "../../Components/Product/ProductListFollowCategory";

type CategoryProductMore = {
  id: number;
  name: string;
  //products: ProductItems[];
  products: ProductItems[];
};

type BrandProductMore = {
  id: number;
  brandName: string;
  //products: ProductItems[];
  products: ProductItems[];
};

function ProductMore() {
  const { name, brandName } = useParams();
  const location = useLocation();
  const [category, setCategory] = useState<CategoryProductMore>();
  const [productMorefollowBrand, setProductMoreFollowBrand] =
    useState<BrandProductMore>();
  useEffect(() => {
    console.log("get brands data from api");
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          // "http://localhost:8080/category/allOfCategory"
          `http://localhost:8080/category/${name}`
        );
        console.log("products more=> ", res);
        setCategory(res.data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };

    const fetchProductsBrand = async () => {
      try {
        const url =
          name && brandName
            ? `http://localhost:8080/category/${name}/${brandName}`
            : `http://localhost:8080/category/${name}`;
        const res = await axios.get(url);
        console.log("products more follow brand based on Category=> ", res);
        setProductMoreFollowBrand(res.data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };

    fetchProducts();
    fetchProductsBrand();
  }, []);
  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <FilterSection />
        <div className="product">
          <div className="title">
            {productMorefollowBrand?.brandName
              ? productMorefollowBrand.brandName
              : category?.name}
          </div>
          {productMorefollowBrand && (
            <ProductListFollowCategory
              products={productMorefollowBrand.products}
            />
          )}
        </div>
        <div className="pagination">
          <Pagination total={10} />
        </div>
      </div>
    </>
  );
}

export default ProductMore;
