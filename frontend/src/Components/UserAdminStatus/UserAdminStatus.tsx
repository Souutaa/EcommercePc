import React from "react";
import ButtonDelete from "../Button/button-delete";
import SeaparatorTable from "../Seaparator/SeaparatorTable";
import ButtonChangeUser from "../Button/button-change-user";
import { User } from "../../PagesAdmin/UserAdmin";

const UserAdminStatus = (props: { user: User }) => {
  const { user } = props;
  return (
    <tbody>
      <tr>
        <td className="pd-20 text-left  ">{user.username}</td>
        <td className="pd-20 text-left">{user.email}</td>
        <td className="pd-20 text-left  ">{user.role}</td>
        <td className="pd-20 text-left  ">
          {new Date(user.createdAt).toLocaleDateString()}
        </td>
        <td className="pd-20 text-left  ">
          <span className="badge bg-success">
            {user.deletedAt ? "Deactivated" : "Active"}
          </span>
        </td>
        <td className="table-action pd-20 text-left">
          <ButtonChangeUser username={user.username} />
          <ButtonDelete />
        </td>
      </tr>
      <SeaparatorTable />
    </tbody>
  );
};

export default UserAdminStatus;
