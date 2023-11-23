import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import Seaparator from "../Seaparator/Seaparator";
import { useEffect, useState } from "react";
import axios from "axios";
import { AccountOrders } from "../../Pages/OrderUser/OrderUser";
import formatPrice from "../../Helper/formatPrice";

function OderUserStatus(props: AccountOrders) {
  return (
    <>
      <div className="user-oder-list">
        <p className="user-order-id"># {props.id} </p>
        <p className="user-order-name">{props.username} </p>
        <p className="user-order-date-order">{props.createdAt}</p>
        <p className="user-order-total-price">{formatPrice(props.total)}</p>
        <p className="user-order-status color-red">{props.status}</p>
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
