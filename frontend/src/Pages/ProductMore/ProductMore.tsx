import { Pagination } from "@mantine/core";

import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import FilterSection from "../../Components/FilterSection/FilterSection";
import { ProductItem } from "../../Components/Product";
import ProductListFollowCategory from "../../Components/Product/ProductListFollowCategory";
import formatPrice from "../../Helper/formatPrice";

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

  const [currentFilter, setCurrentFilter] = useState("Sản phẩm nổi bật");
  const onChangeFilter = (index: string) => {
    setCurrentFilter(index);
  };

  useEffect(() => {}, [currentFilter]);

  const valueLabelFormat = (value: number) => {
    return formatPrice(value);
  };

  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <FilterSection
          onChange={onChangeFilter}
          onChangFilterSlide={valueLabelFormat}
        />
        <div className="product">
          <div className="title">
            {productMorefollowBrand?.brandName
              ? productMorefollowBrand.brandName
              : category?.name}
          </div>
          {productMorefollowBrand &&
            (currentFilter === "2" ? (
              <ProductListFollowCategory
                products={productMorefollowBrand.products.sort(
                  (a: ProductItem, b: ProductItem) => a.price - b.price
                )}
              />
            ) : currentFilter === "3" ? (
              <ProductListFollowCategory
                products={productMorefollowBrand.products.sort(
                  (a: ProductItem, b: ProductItem) => b.price - a.price
                )}
              />
            ) : currentFilter === "4" ? (
              <ProductListFollowCategory
                products={productMorefollowBrand.products.sort(
                  (a: ProductItem, b: ProductItem) =>
                    a.productName > b.productName ? 1 : -1
                )}
              />
            ) : currentFilter === "5" ? (
              <ProductListFollowCategory
                products={productMorefollowBrand.products.sort(
                  (a: ProductItem, b: ProductItem) =>
                    a.productName > b.productName ? -1 : 1
                )}
              />
            ) : (
              <ProductListFollowCategory
                products={productMorefollowBrand.products}
              />
            ))}
        </div>
        <div className="pagination">
          <Pagination total={10} />
        </div>
      </div>
    </>
  );
}

export default ProductMore;
