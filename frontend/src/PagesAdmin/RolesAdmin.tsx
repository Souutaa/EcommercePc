import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import ButtonAddRole from "../Components/Button/button-add-role";
import RoleAdminStatus from "../Components/RoleAdminstatus/RoleAdminStatus";

const RolesAdmin = () => {
  return (
    <div>
      <div className="header-content">
        <h4 className="page-title">Roles</h4>
        <Breadcrumbs />
      </div>
      <div className="body-content">
        <div className="button-admin">
          <ButtonAddRole />
        </div>
        <table className="table-centered">
          <thead className="table-light">
            <tr>
              <th className="sorting" style={{ width: "120px" }}>
                ID
              </th>
              <th className="sorting">Name</th>
              <th className="sorting" style={{ width: "440px" }}>
                Description
              </th>
              <th className="sorting">Created at</th>
              <th className="sorting" style={{ width: "50px" }}>
                Active
              </th>

              <th className="sorting" style={{ width: "100px" }}>
                Action
              </th>
            </tr>
          </thead>
          <RoleAdminStatus />
          <RoleAdminStatus />
          <RoleAdminStatus />
          <RoleAdminStatus />
        </table>
      </div>
    </div>
  );
};

export default RolesAdmin;
