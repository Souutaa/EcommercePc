import { Pagination } from "@mantine/core";

import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import FilterSection from "../../Components/FilterSection/FilterSection";
import { ProductItem } from "../../Components/Product";
import ProductListFollowCategory from "../../Components/Product/ProductListFollowCategory";
import formatPrice from "../../Helper/formatPrice";
import { ProductItems } from "../HomePage/Content";

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
  const [productMoreFollowBrandFilter, setProductMoreFollowBrandFilter] =
    useState<ProductItem[]>();

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
        setProductMoreFollowBrand(res.data);
        setProductMoreFollowBrandFilter(res.data.products);
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

  const [currentFilter, setCurrentFilter] = useState("1");
  const onChangeFilter = (index: string) => {
    setCurrentFilter(index);
    if (productMorefollowBrand)
      switch (index) {
        case "2": {
          setProductMoreFollowBrandFilter(
            productMorefollowBrand.products.sort(
              (a: ProductItem, b: ProductItem) => a.price - b.price
            )
          );
          break;
        }
        case "3": {
          setProductMoreFollowBrandFilter(
            productMorefollowBrand.products.sort(
              (a: ProductItem, b: ProductItem) => b.price - a.price
            )
          );
          break;
        }
        case "4": {
          setProductMoreFollowBrandFilter((prevState) => {
            return productMorefollowBrand.products.sort(
              (a: ProductItem, b: ProductItem) =>
                a.productName > b.productName ? 1 : -1
            );
          });
          break;
        }
        case "5": {
          setProductMoreFollowBrandFilter(() => {
            return productMorefollowBrand.products.sort(
              (a: ProductItem, b: ProductItem) =>
                a.productName > b.productName ? -1 : 1
            );
          });
          break;
        }
        default: {
          setProductMoreFollowBrandFilter(productMorefollowBrand.products);
        }
      }
  };

  
  const valueLabelFormat = (value: number) => {
    return formatPrice(value);
  };

  const priceFilter = (min: number, max: number) => {
    if (productMorefollowBrand) {
      if (min === Number.MAX_VALUE && max === Number.MIN_VALUE) {
        setProductMoreFollowBrandFilter(productMorefollowBrand?.products);
        return;
      }
      setProductMoreFollowBrandFilter(
        productMorefollowBrand.products.filter((item) => {
          return item.price >= min && item.price <= max;
        })
      );
    }
  };

  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <FilterSection
          onChangePrice={priceFilter}
          onChange={onChangeFilter}
          onChangFilterSlide={valueLabelFormat}
        />
        <div className="product">
          <div className="title">
            {productMorefollowBrand?.brandName
              ? productMorefollowBrand.brandName
              : category?.name}
          </div>
          {productMoreFollowBrandFilter && (
            <ProductListFollowCategory
              products={productMoreFollowBrandFilter}
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
