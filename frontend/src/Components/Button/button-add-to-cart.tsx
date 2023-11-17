import { Button, useProps } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import "react-toastify/dist/ReactToastify.css";
import { useShopingContext } from "../../Context/ShoppingContext";
import { ProductItem } from "../Product";
function ButtonAdd(item: ProductItem) {
  const { addCartItem } = useShopingContext();
  return (
    <>
      <Button
        onClick={() => {
          addCartItem(item);
          notifications.show({
            withCloseButton: true,
            autoClose: 1500,
            message: "Đã thêm sản phẩm vào giỏ hàng",
            color: "teal",
            icon: <IconCheck />,
            className: "my-notification-class",
            loading: false,
          });
        }}
      >
        Thêm vào giỏ
      </Button>
    </>
  );
}

export default ButtonAdd;
