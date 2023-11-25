import React from "react";
import ButtonChangeBrand from "../Button/button-change-brand";
import ButtonDelete from "../Button/button-delete";
import SeaparatorTable from "../Seaparator/SeaparatorTable";

const BrandAdminStatus = () => {
  return (
    <tbody>
      <tr className="text-hover">
        <td className="sorting">AMD</td>
        <td className="sorting">AMD</td>
        <td className="table-action sorting">
          <ButtonChangeBrand />
          <ButtonDelete />
        </td>
      </tr>
      <SeaparatorTable />
    </tbody>
  );
};

export default BrandAdminStatus;
