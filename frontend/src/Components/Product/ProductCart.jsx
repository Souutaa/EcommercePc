import { notifications } from "@mantine/notifications";
import { Button, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import Btn from "../Button";

function ProductCarts() {
  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: "Bạn có muốn xóa",
      centered: true,
      children: <Text size="sm"></Text>,
      labels: { confirm: "Có", cancel: "Khum" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });
  return (
    <>
      <div className="productcart-item">
        <div className="productcart-item-img">
          <img
            style={{ width: "94px", height: "94px" }}
            src="/img/Img.png"
            alt=""
          />
        </div>
        <div className="productcart-info">
          <div className="productcart-name">
            Laptop Gaming Acer Nitro 5 Eagle AN515-57-54MV
          </div>
          <span className="productcart-color">Màu sắc: Black</span>
          <span className="productcart-fix">Sửa</span>
        </div>
        <span className="productcart-price">24.190.000₫</span>
        <div className="productcart-width">
          <div className="productcart-quality">1</div>
        </div>
        <MantineProvider>
          <ModalsProvider>
            <img
              onClick={openDeleteModal}
              src="/img/delete.png"
              alt=""
              className="productcart-delete"
            />
          </ModalsProvider>
        </MantineProvider>
      </div>
    </>
  );
}

export default ProductCarts;
