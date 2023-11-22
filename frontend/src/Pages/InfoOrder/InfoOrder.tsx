import { Avatar } from "@mantine/core";

import UserInfor from "../../Components/UserInfor/UserInfor";
import UserOder from "../../Components/UserOrder/UserOrder";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import Total from "../../Components/Total/Total";
import OrderWrapper from "../../Components/OrderWrapper/OrderWrapper";
import ShipInfo from "../../Components/ShipInfo/ShipInfo";

function InfoOrder() {
  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <div className="infouser-content">
          <div className="infouser-sidebar">
            <div className="infouser-avatar">
              <Avatar style={{ marginTop: "20px" }}></Avatar>
              <div className="margin-right">
                <UserInfor />
              </div>
            </div>
            <UserOder />
          </div>
          <div className="infoorder-container">
            <div className="infoorder-detail">
              <h4 className="heading-territory">
                Các sản phẩm từ hóa đơn
                <span className="oder-id">#35</span>
              </h4>
              <OrderWrapper />
            </div>
            <div className="info-total-address">
              <div className="infoorder-summary">
                <Total />
              </div>
              <ShipInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoOrder;
