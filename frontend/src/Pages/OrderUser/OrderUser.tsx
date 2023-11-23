import {
  Avatar,
  Group,
  Pagination,
  PaginationControl,
  SegmentedControl,
  SegmentedControlItem,
} from "@mantine/core";
import UserInfor from "../../Components/UserInfor/UserInfor";
import UserOder from "../../Components/UserOrder/UserOrder";
import OderUserStatus from "../../Components/OrderUserStatus/OderUserStatus";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumb";
import axios from "axios";
import { useState, useEffect } from "react";
import { usePagination } from "@mantine/hooks";
import ReactPaginate from "react-paginate";

type OrderDetail = {
  id: number;
  purchasePrice: number;
};

export type AccountOrders = {
  id: number;
  username: string;
  status: string;
  total: number;
  createdAt: string;
  //orderDetails: OrderDetail[];
};

type UserInfo = {
  id: number;
  username: string;
  accountOrders: AccountOrders[];
};

function OderUser() {
  const [accountOrder, setAccountOrder] = useState<AccountOrders[]>([]);
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/order/getOrder`);

        console.log("userInfo ==> ", res);
        setAccountOrder(res.data);
      } catch (error) {
        console.log("error userInfo ==> ", error);
      }
    };

    fetchProducts();
  }, []);

  //Pagination
  const [pageNumber, setPageNumber] = useState(1);
  const infoPerPage = 1;
  const pagesVisited = pageNumber * infoPerPage;
  const pageCount = Math.ceil(accountOrder.length / infoPerPage);

  //Filter
  const [currentFilter, setCurrentFilter] = useState("ALL");
  const onChangeFilter = (index: string) => {
    setCurrentFilter(index);
    if (index == "ALL") {
      setPageSize(pageCount);
    } else {
      setPageSize(accountOrder.filter((e) => e.status == index).length);
    }
  };

  const onPageChange = (selected: number) => {
    setPageNumber(selected);
  };

  const displayInfo = accountOrder
    .slice(pagesVisited - 1, pagesVisited + infoPerPage + pageSize - 1)
    .map((e) => {
      if (currentFilter == "ALL") {
        return (
          <div key={e.id}>
            <OderUserStatus
              key={e.id}
              username={e.username}
              total={e.total}
              id={e.id}
              createdAt={e.createdAt}
              //orderDetails={e.orderDetails}
              status={e.status}
            />
          </div>
        );
      } else if (currentFilter == e.status) {
        return (
          <div key={e.id}>
            <OderUserStatus
              key={e.id}
              username={e.username}
              total={e.total}
              id={e.id}
              createdAt={e.createdAt}
              //orderDetails={e.orderDetails}
              status={e.status}
            />
          </div>
        );
      }
      // console.log("1------", currentFilter);
      // console.log("2------", e.status);
    });

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
              //defaultValue={currentFilter}
              data={[
                {
                  value: "ALL",
                  label: "Tất cả",
                },
                {
                  value: "PENDING",
                  label: "Đang xử lý",
                },
                {
                  value: "DELIVERING",
                  label: "Đang giao",
                },
                {
                  value: "SUCCESS",
                  label: "Hoàn thành",
                },
                {
                  value: "CANCELED",
                  label: "Đã hủy",
                },
              ]}
              value={currentFilter}
              onChange={onChangeFilter}
            />

            <div className="orderuser-status">
              {displayInfo}
              <Pagination
                className="pagination-center"
                style={{ marginBottom: "-20px", marginTop: "30px" }}
                total={pageSize}
                defaultValue={2}
                onChange={onPageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OderUser;
