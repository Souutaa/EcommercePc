import React, { useCallback, useEffect, useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import LengthProduct from "../Components/LengthProduct/LengthProduct";
import SearchAdmin from "../Components/SearchAdmin/SearchAdmin";
import OrderTitleAdmin from "../Components/OrderTitleAdmin/OrderTitleAdmin";
import PagiProductAdmin from "../Components/PaginationProductAdmin/PagiProductAdmin";
import OrderAdminStatus from "../Components/OrderAdminStatus/OrderAdminStatus";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import axios from "axios";

export interface AdminOrder {
  id: number;
  username: string;
  status: string;
  total: number;
  createdAt: string;
}

const OrderAdmin = () => {
  const [orders, setOrders] = useState<AdminOrder[]>([]);

  const fetchOrders = useCallback(async () => {
    const response = await axios.get("http://127.0.0.1:8080/order/getAllOrder");
    setOrders(response.data);
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

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
              {orders.map((order) => (
                <OrderAdminStatus key={order.id} order={order} />
              ))}
            </table>
            <PagiProductAdmin />
          </div>
        </div>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default OrderAdmin;
