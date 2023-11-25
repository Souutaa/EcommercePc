import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import ButtonAddBrands from "../Components/Button/button-add-brands";
import BrandAdminStatus from "../Components/BrandAdminStatus/BrandAdminStatus";

const BrandAdmin = () => {
  return (
    <div>
      <div className="header-content">
        <h4 className="page-title">Brands</h4>
        <Breadcrumbs />
      </div>
      <div className="body-content">
        <div className="button-admin">
          <ButtonAddBrands />
        </div>
        <table className="table-centered">
          <thead className="table-light">
            <tr>
              <th className="sorting" style={{ width: "150px" }}>
                ID
              </th>
              <th className="sorting">Name Brand</th>
              <th className="sorting" style={{ width: "150px" }}>
                Action
              </th>
            </tr>
          </thead>
          <BrandAdminStatus />
          <BrandAdminStatus />
          <BrandAdminStatus />
          <BrandAdminStatus />
          <BrandAdminStatus />
          <BrandAdminStatus />
          <BrandAdminStatus />
          <BrandAdminStatus />
        </table>
      </div>
    </div>
  );
};

export default BrandAdmin;
