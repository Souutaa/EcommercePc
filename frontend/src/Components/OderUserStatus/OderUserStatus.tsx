import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import Seaparator from "../Seaparator/Seaparator";

function OderUserStatus() {
  return (
    <>
      <div className="user-oder-list">
        <p className="user-order-id"># 35 </p>
        <p className="user-order-name">testuser1 </p>
        <p className="user-order-date-order">2023-05-06 </p>
        <p className="user-order-total-price">29,490,000đ</p>
        <p className="user-order-status color-red">Đã Hủy</p>
        <a
          className="user-order"
          href="/ODER"
          style={{ textDecoration: "none" }}
        >
          Chi tiết hóa đơn
        </a>
      </div>
      <Seaparator />
    </>
  );
}

export default OderUserStatus;
