import React from "react";
import SeaparatorTable from "../Seaparator/SeaparatorTable";
import ButtonChangeOrder from "../Button/button-change-order";

const OrderAdminStatus = () => {
  return (
    <tbody>
      <tr>
        <td className="pd-20 text-left">#18</td>
        <td className="pd-20 text-left">2023-05-09 19:50:29</td>
        <td className="pd-20 text-left">testuser1</td>
        <td className="pd-20 text-left">58,980,000₫</td>
        <td className="pd-20 text-left">
          <span className="badge bg-success">Đã giao</span>
        </td>
        <td className="table-action pd-20 text-left">
          <ButtonChangeOrder />
        </td>
      </tr>

      <SeaparatorTable />
    </tbody>
  );
};

export default OrderAdminStatus;
