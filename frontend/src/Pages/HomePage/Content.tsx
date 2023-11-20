import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import Product from "../../Components/Product";
import "./style.css";
import TabProduct from "../../Components/TabProduct/TabProduct";
import ButtonMore from "../../Components/Button/button-more";
import ProductList from "../../Components/Product/ProductList";
import { useEffect, useState } from "react";
import axios from "axios";

export type ProductItems = {
  id: number;
  productName: string;
  productLine: string;
  discount: number;
  price: number;
  thumbnailUri: string;
};
type Brand = {
  id: number;
  brandName: string;
  products: ProductItems[];
};

function Content() {
  const [brand, setBrand] = useState<Brand[]>([]);
  useEffect(() => {
    console.log("get brands data from api");
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8080/brand/allOfBrand");
        console.log("products=> ", res);
        setBrand(res.data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="products">
          <TabProduct />
          {brand.map((item) => {
            return (
              <div key={item.id}>
                <div className="title">{item.brandName}</div>
                <ProductList products={item.products} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Content;
