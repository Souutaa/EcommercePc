import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import LengthProduct from "../Components/LengthProduct/LengthProduct";
import SearchAdmin from "../Components/SearchAdmin/SearchAdmin";
import OrderTitleAdmin from "../Components/OrderTitleAdmin/OrderTitleAdmin";
import PagiProductAdmin from "../Components/PaginationProductAdmin/PagiProductAdmin";
import OrderAdminStatus from "../Components/OrderAdminStatus/OrderAdminStatus";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

const OrderAdmin = () => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <Notifications />
        <div className="header-content">
          <h4 className="page-title">Orders</h4>
          <Breadcrumbs />
        </div>
        <div className="body-content">
          <div className="product-datatable-wrapper">
            <div className="product-datatable-sort">
              <LengthProduct />
              <SearchAdmin />
            </div>
            <table className="table-centered">
              <OrderTitleAdmin />
              <OrderAdminStatus />
              <OrderAdminStatus />
              <OrderAdminStatus />
              <OrderAdminStatus />
              <OrderAdminStatus />
              <OrderAdminStatus />
              <OrderAdminStatus />
            </table>
            <PagiProductAdmin />
          </div>
        </div>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default OrderAdmin;
