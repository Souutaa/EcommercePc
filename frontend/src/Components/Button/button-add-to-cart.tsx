import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import "react-toastify/dist/ReactToastify.css";
import { useShopingContext } from "../../Context/ShoppingContext";
import { ProductItem } from "../Product";
function ButtonAdd(item: ProductItem) {
  const { addCartItem, checkCart } = useShopingContext();
  return (
    <>
      <Button

        onClick={() => {
          console.log(item.stock)
          if (!checkCart(item.id, item.stock)) {
            notifications.show({
              withCloseButton: true,
              autoClose: 1500,
              message: "Sản phẩm đã hết hàng",
              color: "red",
              icon: <IconX />,
              className: "my-notification-class",
              loading: false,
            });
            return;
          }
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
