// import { MantineProvider } from "@mantine/core";
// import { Notifications, notifications } from "@mantine/notifications";
import { Button } from "@mantine/core";
import Btn from ".";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ButtonAdd() {
  const handleClick = () => {
    toast("Đây là thông báo thành công!");
  };

  return (
    <>
      <Button onClick={handleClick}>Thêm vào giỏ</Button>
    </>
  );
}

export default ButtonAdd;
