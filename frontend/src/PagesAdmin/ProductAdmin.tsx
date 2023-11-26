import { Input } from "@mantine/core";
import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import PagiProductAdmin from "../Components/PaginationProductAdmin/PagiProductAdmin";
import ProductAdminStatus from "../Components/ProductAdminStatus/ProductAdminStatus";
import ProductTitleAdmin from "../Components/ProductTitleAdmin/ProductTitleAdmin";
import LengthProduct from "../Components/LengthProduct/LengthProduct";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import ButtonAddAdmin from "../Components/Button/button-add-product-admin";
import SearchAdmin from "../Components/SearchAdmin/SearchAdmin";

const ProductAdmin = () => {
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
            <ButtonAddAdmin />
          </div>
          <div className="product-datatable-wrapper">
            <div className="product-datatable-sort">
              <LengthProduct />
              <SearchAdmin />
            </div>
            <table className="table-centered">
              <ProductTitleAdmin />
              <ProductAdminStatus />
              <ProductAdminStatus />
              <ProductAdminStatus />
              <ProductAdminStatus />
              <ProductAdminStatus />
            </table>
            <PagiProductAdmin />
          </div>
        </div>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default ProductAdmin;
