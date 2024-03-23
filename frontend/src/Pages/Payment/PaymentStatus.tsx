import axios from "axios";
import { useEffect } from "react";
import API_ADDRESS from "../../Api_Address";
const PaymentStatus = () => {
  const updateOrder = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const responseCode = urlParams.get("vnp_ResponseCode");
    const orderId = localStorage.getItem("orderId");
    await axios.patch(
      `http://${API_ADDRESS}:8080/order/update-payment-status`,
      {
        orderId: orderId,
        orderPayment: responseCode === "00" ? "SUCCESS" : "FAIL",
      }
    );
    window.close();
  };
  useEffect(() => {
    updateOrder();
  }, []);
  return <></>;
};

export default PaymentStatus;
