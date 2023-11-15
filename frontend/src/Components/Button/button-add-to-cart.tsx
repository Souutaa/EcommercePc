// import { MantineProvider } from "@mantine/core";
import { Notifications, notifications } from "@mantine/notifications";
import Btn from ".";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ButtonAdd() {
  const handleClick = () => {
    toast.success("Đây là thông báo thành công!", {
      position: "top-right",
      autoClose: 3000, // Đóng sau 3 giây
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Notifications />
      <Btn maintine="a" onClick={handleClick}>
        Thêm vào giỏ
      </Btn>
      <Notifications />
    </>
  );
}

export default ButtonAdd;
