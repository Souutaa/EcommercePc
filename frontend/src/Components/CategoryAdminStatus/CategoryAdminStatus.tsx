import React from "react";

import ButtonDelete from "../Button/button-delete";
import SeaparatorTable from "../Seaparator/SeaparatorTable";
import ButtonChangeCategory from "../Button/button-change-category";

const CategoryAdminStatus = () => {
  return (
    <tbody>
      <tr className="text-hover">
        <td className="sorting">1</td>
        <td className="sorting">Laptop</td>
        <td className="table-action sorting">
          <ButtonChangeCategory />
          {/* <ButtonDelete /> */}
        </td>
      </tr>
      <SeaparatorTable />
    </tbody>
  );
};

export default CategoryAdminStatus;
