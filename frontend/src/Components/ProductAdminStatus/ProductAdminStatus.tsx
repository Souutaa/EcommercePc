import { modals } from "@mantine/modals";
import { IconEye, IconPencil } from "@tabler/icons-react";
import formatPrice from "../../Helper/formatPrice";
import { AdminProductInformation } from "../../PagesAdmin/ProductAdmin";
import ButtonDelete from "../Button/button-delete";
import FormChange from "../FormChange/FormChange";
import FormView from "../FormView/FormView";
import SeaparatorTable from "../Seaparator/SeaparatorTable";

interface Props {
  product: AdminProductInformation;
}

const ProductAdminStatus = (props: Props) => {
  const { product } = props;
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
            src={`http://127.0.0.1:8080/product/get-file?filePath=${product.thumbnailUri}`}
            alt=""
          />
          <p className="text-product-admin">{product.productName}</p>
        </td>
        <td className="pd-20 text-left  ">{product.categoryName}</td>
        <td className="pd-20 text-left">{product.createdAt}</td>
        <td className="pd-20 text-left  ">{formatPrice(product.price)}</td>
        <td className="pd-20 text-left  ">{product.stock}</td>
        <td className="pd-20 text-left  ">
          {product.deletedAt ? (
            <span className="badge bg-failed">Deactived</span>
          ) : (
            <span className="badge bg-success">Actived</span>
          )}
        </td>
        <td className="table-action pd-20 text-left">
          <IconEye
            onClick={() => {
              modals.open({
                size: "xl",
                title: "Product's Information",
                children: (
                  <>
                    <FormView productLine={product.productLine} />
                  </>
                ),
              });
            }}
            style={{ marginRight: "5px" }}
          />
          <IconPencil
            onClick={() => {
              modals.open({
                size: "xl",
                title: "Product's Information",
                children: (
                  <>
                    <FormChange productLine={product.productLine}/>
                  </>
                ),
              });
            }}
            style={{ marginRight: "5px" }}
          />
          <ButtonDelete productLine={product.productLine} />
        </td>
      </tr>

      <SeaparatorTable />
    </tbody>
  );
};

export default ProductAdminStatus;
