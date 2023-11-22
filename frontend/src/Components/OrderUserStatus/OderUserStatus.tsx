import { Link } from "react-router-dom";
import Seaparator from "../Seaparator/Seaparator";
import { useEffect, useState } from "react";
import axios from "axios";
import { AccountOrders } from "../../Pages/OrderUser/OrderUser";
import formatPrice from "../../Helper/formatPrice";
import { PATHS } from "../../Constants/path";

function OderUserStatus(props: AccountOrders) {
  return (
    <>
      <div className="user-oder-list">
        <p className="user-order-id"># {props.id} </p>
        <p className="user-order-name">{props.username} </p>
        <p className="user-order-date-order">{props.createAt.getUTCDate()} </p>
        <p className="user-order-total-price">{formatPrice(props.total)}</p>
        <p className="user-order-status color-red">{props.status}</p>
        <Link
          to={PATHS.INFORDER}
          className="user-order"
          style={{ textDecoration: "none" }}
        >
          Chi tiết hóa đơn
        </Link>
      </div>
      <Seaparator />
    </>
  );
}

export default OderUserStatus;
