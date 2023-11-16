import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import "react-toastify/dist/ReactToastify.css";
function ButtonAdd() {
  return (
    <>
      <Button
        onClick={() =>
          notifications.show({
            withCloseButton: true,
            autoClose: 5000,
            message: "Đã thêm sản phẩm vào giỏ hàng",
            color: "teal",
            icon: <IconCheck />,
            className: "my-notification-class",
            loading: false,
          })
        }
      >
        Thêm vào giỏ
      </Button>
    </>
  );
}

export default ButtonAdd;
