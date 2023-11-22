import { Avatar, Pagination, SegmentedControl } from "@mantine/core";
import UserInfor from "../../Components/UserInfor/UserInfor";
import UserOder from "../../Components/UserOrder/UserOrder";
import OderUserStatus from "../../Components/OrderUserStatus/OderUserStatus";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumb";
import axios from "axios";
import { useState, useEffect } from "react";

type OrderDetail = {
  id: number;
  purchasePrice: number;
};

type AccountOrders = {
  id: number;
  username: string;
  status: string;
  total: number;
  createAt: Date;
  orderDetails: OrderDetail[];
};

type UserInfo = {
  id: number;
  username: string;
  accountOrders: AccountOrders[];
};

function OderUser() {
  const [userInfo, setUserInfo] = useState<UserInfo[]>([]);
  const [accountOrder, setAccountOrder] = useState<AccountOrders[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/user/getInfo`);
        
        console.log("userInfo ==> ", res);
        const data = await res.data;
        try {
          const res = await axios.get(
            `http://localhost:8080/order/${data.username}/getOrder`
          );
          console.log("accountOrder ==> ", res);
          setUserInfo(data);
          setAccountOrder(res.data);
        } catch (error) {
          console.log("error accountOrder ==> ", error);
        }
      } catch (error) {
        console.log("error userInfo ==> ", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <div className="infouser-content">
          <div className="infouser-sidebar">
            <div className="infouser-avatar">
              <Avatar style={{ marginTop: "20px" }}></Avatar>
              <div className="margin-right">
                <UserInfor />
              </div>
            </div>
            <UserOder />
          </div>

          <div className="orderuser-container">
            <SegmentedControl
              style={{ backgroundColor: "#fff" }}
              fullWidth
              color="blue"
              size="md"
              radius="lg"
              data={[
                "Tất cả",
                "Đang xử lý",
                "Đang giao",
                "Hoàn thành",
                "Đã hủy",
              ]}
            />
            <div className="orderuser-status">
              <OderUserStatus />
              <OderUserStatus />
              <OderUserStatus />
              <OderUserStatus />
              <OderUserStatus />
              <OderUserStatus />
              <Pagination
                className="pagination-center"
                style={{ marginBottom: "-20px", marginTop: "30px" }}
                total={10}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OderUser;
