import { IconCheck } from "@tabler/icons-react";
import { Button, rem } from "@mantine/core";
import Btn from ".";
import { notifications } from "@mantine/notifications";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
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
