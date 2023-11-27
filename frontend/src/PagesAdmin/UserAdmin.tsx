import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import PagiProductAdmin from "../Components/PaginationProductAdmin/PagiProductAdmin";
import ButtonAddAdmin from "../Components/Button/button-add-product-admin";
import LengthProduct from "../Components/LengthProduct/LengthProduct";
import SearchAdmin from "../Components/SearchAdmin/SearchAdmin";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import ButtonAddUsers from "../Components/Button/button-add-users";
import UserTitleAdmin from "../Components/UserTitleAdmin/UserTitleAdmin";
import UserAdminStatus from "../Components/UserAdminStatus/UserAdminStatus";

const UserAdmin = () => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <Notifications />
        <div className="header-content">
          <h4 className="page-title">Account</h4>
          <Breadcrumbs />
        </div>
        <div className="body-content">
          <div className="button-admin">
            <ButtonAddUsers />
          </div>
          <div className="product-datatable-wrapper">
            <div className="product-datatable-sort">
              <LengthProduct />
              <SearchAdmin />
            </div>
            <table className="table-centered">
              <UserTitleAdmin />
              <UserAdminStatus />
              <UserAdminStatus />
              <UserAdminStatus />
              <UserAdminStatus />
              <UserAdminStatus />
              <UserAdminStatus />
            </table>
            <PagiProductAdmin />
          </div>
        </div>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default UserAdmin;
