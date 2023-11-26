import { Button, NativeSelect } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import React from "react";
import Total from "../Total/Total";
import Seaparator from "../Seaparator/Seaparator";

const FromChangeOrder = () => {
  return (
    <div>
      <div className="infoorder-wrapper">
        <div className="infoorder-header">
          Trạng thái đơn hàng
          <span className="text-status bg-warning">Đang xử lý</span>
        </div>

        <NativeSelect
          style={{ width: "50%", marginTop: "20px" }}
          data={["Đang xử lý", "Đang giao", "Đã giao", "Đã hủy"]}
        />
        <Button
          style={{ marginBottom: "20px" }}
          mt="md"
          onClick={() => {
            notifications.show({
              withCloseButton: true,
              autoClose: 1500,
              message: "Cập nhật trạng thái thành công",
              color: "teal",
              icon: <IconCheck />,
              className: "my-notification-class",
              loading: false,
            });
            modals.closeAll();
          }}
        >
          Save and change
        </Button>
        <div className="infoorder-titles">
          <h4 className="infoorder-title ">Sản phẩm</h4>
          <h4 className="infoorder-title ">Số lượng</h4>
          <h4 className="infoorder-title ">Giá</h4>
          <h4 className="infoorder-title ">Tổng</h4>
        </div>
        <div className="infoorder-item">
          <div className="infoorder-item-name">
            CPU AMD RYZEN 5 3600 (3.6GHz Up to 4.20GHz, AM4, 6 Cores 12 Threads)
            Box Công Ty
            <span className="infoorder-item-warranty">Hết bảo hành</span>
          </div>

          <span className="infoorder-item-quantity">1</span>
          <span className="infoorder-item-price"> 4,390,000đ</span>
          <span className="infoorder-item-total-price">4,390,000đ</span>
        </div>
      </div>
      <div className="order-total-admin">
        <div className="productcart-total">
          <span className="productcart-texts">Tổng</span>
          <span className="productcart-number">4,390,000đ</span>
        </div>
        <div className="productcart-sale-all">
          <span className="productcart-texts">Giảm giá</span>
          <span className="productcart-number-sale">-0đ</span>
        </div>
        <div className="productcart-total-all">
          <span className="productcart-text">Tổng cộng:</span>
          <span className="productcart-number-total">4,390,000đ</span>
        </div>
      </div>
      <div className="shipinfo-admin">
        <div
          style={{ paddingLeft: "0" }}
          className="infoorder-ship-information"
        >
          <h2 className="infoorder-text ">Le Vi</h2>
          <p className="infoorder-text">0352116516</p>
          <p className="infoorder-text ">
            Ấp chợ, xã Mỹ Thạnh, Thành phố Điện Biên Phủ, Tỉnh Điện Biên
          </p>
          <p className="infoorder-text ">Không có ghi chú</p>
        </div>
      </div>
      <div className="infoorder-footer">
        <Seaparator />
      </div>
    </div>
  );
};

export default FromChangeOrder;
