import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import ButtonAddCategory from "../Components/Button/button-add-category";
import CategoryAdminStatus from "../Components/CategoryAdminStatus/CategoryAdminStatus";

const CategoriesAdmin = () => {
  return (
    <div>
      <div className="header-content">
        <h4 className="page-title">Category</h4>
        <Breadcrumbs />
      </div>
      <div className="body-content">
        <div className="button-admin">
          <ButtonAddCategory />
        </div>
        <table className="table-centered">
          <thead className="table-light">
            <tr>
              <th className="sorting" style={{ width: "150px" }}>
                ID Category
              </th>
              <th className="sorting">Name Category</th>
              <th className="sorting" style={{ width: "150px" }}>
                Action
              </th>
            </tr>
          </thead>
          <CategoryAdminStatus />
          <CategoryAdminStatus />
          <CategoryAdminStatus />
          <CategoryAdminStatus />
          <CategoryAdminStatus />
          <CategoryAdminStatus />
        </table>
      </div>
    </div>
  );
};

export default CategoriesAdmin;
