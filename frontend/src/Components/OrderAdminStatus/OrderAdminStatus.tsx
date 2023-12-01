import React from "react";
import SeaparatorTable from "../Seaparator/SeaparatorTable";
import ButtonChangeOrder from "../Button/button-change-order";
import { AdminOrder } from "../../PagesAdmin/OrderAdmin";
import formatPrice from "../../Helper/formatPrice";

const OrderAdminStatus = (props: { order: AdminOrder }) => {
  const { order } = props;
  return (
    <tbody>
      <tr>
        <td className="pd-20 text-left">#{order.id}</td>
        <td className="pd-20 text-left">{order.createdAt}</td>
        <td className="pd-20 text-left">{order.username}</td>
        <td className="pd-20 text-left">{formatPrice(order.total)}</td>
        <td className="pd-20 text-left">
          <span className="badge bg-success">{order.status}</span>
        </td>
        <td className="table-action pd-20 text-left">
          <ButtonChangeOrder orderId={order.id}/>
        </td>
      </tr>

      <SeaparatorTable />
    </tbody>
  );
};

export default OrderAdminStatus;
