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
  stock: number;
};
export type Brand = {
  id: number;
  brandName: string;
  products: ProductItems[];
};

export type Category = {
  id: number;
  name: string;
  brands: Brand[];
};

function Content() {
  const [category, setCategory] = useState<Category[]>([]);
  useEffect(() => {
    console.log("get brands data from api");
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
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

  const [allCategory, setAllCategory] = useState(true);
  const onChangeAllCategory = (e: string) => {
    if (e === "ALL") setAllCategory(true);
    else setAllCategory(false);
  };

  return (
    <>
      <div className="container">
        <div className="products">
          <TabProduct onChange={onChangeAllCategory} />
          {category.map((item) => {
            if (allCategory === true)
              return (
                <>
                  {item.brands.length > 0 ? (
                    <div key={item.id}>
                      <div className="title">{item.name}</div>
                      <ProductList brands={item.brands} name={item.name} />
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
          })}
        </div>
      </div>
    </>
  );
}
export default Content;
