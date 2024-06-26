import axios from "axios";
import { useEffect } from "react";
import API_ADDRESS from "../../Api_Address";
const PaymentStatus = () => {
  const updateOrder = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const responseCode = urlParams.get("vnp_ResponseCode");
    const vnpayOrderId = urlParams.get('vnp_TxnRef')?.toString();
    const _axios = axios.create({});
    await _axios.patch(`http://10.65.15.69:8080/order/update-payment-status`, {
      vnpOrderId: vnpayOrderId,
      orderPayment: responseCode === "00" ? "SUCCESS" : "FAIL"
    })
    setTimeout(() => {
      window.close();
    }, 5000);
  };
  useEffect(() => {
    updateOrder();
  }, []);
  return <>
    Cửa sổ sẽ đóng lại sau 5s...
  </>;
};

export default PaymentStatus;
