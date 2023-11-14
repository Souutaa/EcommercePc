import { MantineProvider } from "@mantine/core";
import { Notifications, notifications } from "@mantine/notifications";
import Btn from ".";
function ButtonAdd() {
  return (
    <>
      <MantineProvider>
        <Notifications />
        <Btn
          maintine="a"
          onClick={() =>
            notifications.show({
              message: "Đã thêm sản phẩm vào giỏ hàng",
            })
          }
        >
          Thêm vào giỏ
        </Btn>
        <Notifications />
      </MantineProvider>
    </>
  );
}

export default ButtonAdd;
