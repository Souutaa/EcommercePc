import { Link } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import ButtonAdd from "../Button/button-add-to-cart";
import { useEffect, useState } from "react";
import axios from "axios";
import { useShopingContext } from "../../Context/ShoppingContext";
import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { ProductItems } from "../../Pages/HomePage/Content";

export type ProductItem = {
  id: number;
  productName: string;
  productLine: string;
  discount: number;
  price: number;
  thumbnailUri: string;
};

function Product(props: { products: ProductItems[] }) {
  const test = props.products;
  // const [products, setProducts] = useState<ProductItem[]>([]);
  // const { addCartItem } = useShopingContext();
  // useEffect(() => {
  //   console.log("get products data from api");
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await axios.get("http://127.0.0.1:8080/product/all");
  //       console.log("products=> ", res);
  //       setProducts(res.data);
  //     } catch (error) {
  //       console.log("error=> ", error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);
  return (
    <>
      {/* {products.map((item) => {
        return (
          <div key={item.id} className="product-item">
            <Link to={PATHS.PRODUCT}>
              <div className="product-img">
                <img
                  src={`http://127.0.0.1:8080/product/get-file?filePath=${item.thumbnailUri}`}
                  alt={item.productName}
                  className="img"
                />
              </div>
            </Link>
            <div className="product-info">
              <h4 className="product-name">{item.productName}</h4>
              <div className="product-detail">
                <span className="product-price">${item.price}</span>
                <ButtonAdd
                  id={item.id}
                  price={item.price}
                  discount={item.discount}
                  productLine={item.productLine}
                  productName={item.productName}
                  thumbnailUri={item.thumbnailUri}
                />
              </div>
            </div>
          </div>
        );
      })} */}
      {test.map((e) => {
        return (
          <div key={e.id} className="product-item">
            <Link
              to={{
                pathname: PATHS.PRODUCT + `/${e.productLine}`,
              }}
            >
              <div className="product-img">
                <img
                  src={`http://127.0.0.1:8080/product/get-file?filePath=${e.thumbnailUri}`}
                  alt={e.productName}
                  className="img"
                />
              </div>
            </Link>
            <div className="product-info">
              <h4 className="product-name">{e.productName}</h4>
              <div className="product-detail">
                <span className="product-price">${e.price}</span>
                <ButtonAdd
                  id={e.id}
                  price={e.price}
                  discount={e.discount}
                  productLine={e.productLine}
                  productName={e.productName}
                  thumbnailUri={e.thumbnailUri}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Product;
