import { Link, Navigate } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import ButtonAdd from "../Button/button-add-to-cart";
import { useEffect, useState } from "react";
import axios from "axios";
import { useShopingContext } from "../../Context/ShoppingContext";
import { Button, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { ProductItems } from "../../Pages/HomePage/Content";
import formatPrice from "../../Helper/formatPrice";

export type ProductItem = {
  id: number;
  name?: string;
  productName: string;
  productLine: string;
  discount: number;
  price: number;
  thumbnailUri: string;
};

function Product(props: { products: ProductItems[] }) {
  const products = props.products;
  return (
    <>
      {products.map((e) => {
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
                <span className="product-price">{formatPrice(e.price)}</span>
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
