import { Input } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import PagiProductAdmin from "../Components/PaginationProductAdmin/PagiProductAdmin";
import ProductAdminStatus from "../Components/ProductAdminStatus/ProductAdminStatus";
import ProductTitleAdmin from "../Components/ProductTitleAdmin/ProductTitleAdmin";
import LengthProduct from "../Components/LengthProduct/LengthProduct";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import ButtonAddAdmin from "../Components/Button/button-add-product-admin";
import axios from "axios";

export interface AdminProductInformation {
  id: number;
  productLine: string;
  productName: string;
  price: number;
  discount: number;
  thumbnailUri: string;
  stock: number;
  categoryName: string;
  brandName: string;
  deletedAt: string;
  createdAt: string;
}

const ProductAdmin = () => {
  const [products, setProducts] = useState<AdminProductInformation[]>();
  const [newProduct, setNewProduct] = useState<String>("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/product/all"
        );
        setProducts(response.data);
      } catch {}
    };
    fetchProducts();
  }, [newProduct]);

  return (
    <MantineProvider>
      <ModalsProvider>
        <Notifications />
        <div className="header-content">
          <h4 className="page-title">Products</h4>
          <Breadcrumbs />
        </div>
        <div className="body-content">
          <div className="button-admin">
            <ButtonAddAdmin setNewProduct={setNewProduct}/>
          </div>
          <div className="product-datatable-wrapper">
            <div className="product-datatable-sort">
              <LengthProduct />
              <div className="dataTables-filter">
                <label htmlFor="" className="form-lable">
                  Search
                  <Input style={{ marginLeft: "10px" }} />
                </label>
              </div>
            </div>
            <table className="table-centered">
              <ProductTitleAdmin />
              {products && products.map(product => {
                return <ProductAdminStatus product={product}/>
              })}
            </table>
            <PagiProductAdmin />
          </div>
        </div>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default ProductAdmin;
