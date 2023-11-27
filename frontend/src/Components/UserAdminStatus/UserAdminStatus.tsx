import React from "react";
import ButtonDelete from "../Button/button-delete";
import SeaparatorTable from "../Seaparator/SeaparatorTable";
import ButtonChangeUser from "../Button/button-change-user";

const UserAdminStatus = () => {
  return (
    <tbody>
      <tr>
        <td className="pd-20 text-left  ">testadmin1</td>
        <td className="pd-20 text-left  ">0351116516</td>
        <td className="pd-20 text-left">testadmin@gmail.com9</td>
        <td className="pd-20 text-left  ">ADMIN</td>
        <td className="pd-20 text-left  ">02-04-2023</td>
        <td className="pd-20 text-left  ">
          <span className="badge bg-success">Active</span>
        </td>
        <td className="table-action pd-20 text-left">
          <ButtonChangeUser />
          <ButtonDelete productLine="" />
        </td>
      </tr>
      <SeaparatorTable />
    </tbody>
  );
};

export default UserAdminStatus;
