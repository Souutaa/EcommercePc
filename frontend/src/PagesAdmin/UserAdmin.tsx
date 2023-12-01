import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import ButtonAddUsers from "../Components/Button/button-add-users";
import LengthProduct from "../Components/LengthProduct/LengthProduct";
import PagiProductAdmin from "../Components/PaginationProductAdmin/PagiProductAdmin";
import SearchAdmin from "../Components/SearchAdmin/SearchAdmin";
import UserAdminStatus from "../Components/UserAdminStatus/UserAdminStatus";
import UserTitleAdmin from "../Components/UserTitleAdmin/UserTitleAdmin";

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  createdAt: string;
  deletedAt: string;
}

const UserAdmin = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useCallback(async () => {
    const response = await axios.get(
      "http://127.0.0.1:8080/user/all?active=false"
    );
    setUsers(response.data);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

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
              {users.map((user) => (
                <UserAdminStatus user={user} />
              ))}
            </table>
            <PagiProductAdmin />
          </div>
        </div>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default UserAdmin;
