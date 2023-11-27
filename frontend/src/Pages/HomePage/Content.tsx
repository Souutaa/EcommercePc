import "@mantine/carousel/styles.css";
import { SegmentedControlItem } from "@mantine/core";
import "@mantine/core/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../../Components/Product/ProductList";
import TabProduct from "../../Components/TabProduct/TabProduct";
import "./style.css";

export type ProductItems = {
  id: number;
  productName: string;
  productLine: string;
  discount: number;
  price: number;
  thumbnailUri: string;
};
export type Brand = {
  id: number;
  brandName: string;
  // name: string;
  products: ProductItems[];
};

export type Category = {
  id: number;
  name: string;
  //products: ProductItems[];
  brands: Brand[];
};

function Content() {
  const [category, setCategory] = useState<Category[]>([]);
  // useEffect(() => {
  //   console.log("get brands data from api");
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await axios.get("http://127.0.0.1:8080/brand/allOfBrand");
  //       console.log("products=> ", res);
  //       setBrand(res.data);
  //     } catch (error) {
  //       console.log("error=> ", error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    console.log("get brands data from api");
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          // "http://localhost:8080/category/allOfCategory"
          "http://localhost:8080/category/allOfCategoryBrand"
        );
        console.log("products=> ", res);
        setCategory(res.data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };
    fetchProducts();
  }, []);

  const [test, setTest] = useState(true);
  const onChangeTest = (e: string) => {
    if (e === "ALL") setTest(true);
    else setTest(false);
  };

  return (
    <>
      <div className="container">
        <div className="products">
          {/* {filteredCategory.map((e) => {
            return <TabProduct products={e.products} />;
          })} */}
          <TabProduct onChange={onChangeTest} />
          {category.map((item) => {
            if (test == true)
              return (
                <div key={item.id}>
                  {/* <div className="title">{item.brandName}</div> */}
                  <div className="title">{item.name}</div>
                  <ProductList brands={item.brands} name={item.name} />
                </div>
              );
          })}
        </div>
      </div>
    </>
  );
}
export default Content;
