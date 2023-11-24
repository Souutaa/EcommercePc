import { IconPencil } from "@tabler/icons-react";
import React from "react";
import SeaparatorTable from "../Seaparator/SeaparatorTable";
import ButtonDelete from "../Button/button-delete";
import ButtonView from "../Button/button-view";
import ButtonChange from "../Button/button-change";

const ProductAdminStatus = () => {
  return (
    <tbody>
      <tr>
        <td className="dtr-control pd-20">
          <img
            style={{
              width: "48px",
              height: "48px",
              marginRight: "10px",
            }}
            src="/img/img(1).png"
            alt=""
          />
          <p className="text-product-admin">
            Laptop gaming MSI Katana 15 B13VGK 1211VN
          </p>
        </td>
        <td className="pd-20 text-left  ">Laptop</td>
        <td className="pd-20 text-left">2023-05-09 19:50:29</td>
        <td className="pd-20 text-left  ">8,190,000đ</td>
        <td className="pd-20 text-left  ">3</td>
        <td className="pd-20 text-left  ">
          <span className="badge bg-success">Actived</span>
        </td>
        <td className="table-action pd-20 text-left">
          <ButtonView />
          <ButtonChange />
          <ButtonDelete />
        </td>
      </tr>

      <SeaparatorTable />
    </tbody>
  );
};

export default ProductAdminStatus;
