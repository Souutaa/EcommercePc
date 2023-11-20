import { Avatar, Pagination, SegmentedControl } from "@mantine/core";
import UserInfor from "../../Components/UserInfor/UserInfor";
import UserOder from "../../Components/UserOrder/UserOrder";
import OderUserStatus from "../../Components/OrderUserStatus/OderUserStatus";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumb";

function OderUser() {
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

          <div className="orderuser-container">
            <SegmentedControl
              style={{ backgroundColor: "#fff" }}
              fullWidth
              color="blue"
              size="md"
              radius="lg"
              data={[
                "Tất cả",
                "Đang xử lý",
                "Đang giao",
                "Hoàn thành",
                "Đã hủy",
              ]}
            />
            <div className="orderuser-status">
              <OderUserStatus />
              <OderUserStatus />
              <OderUserStatus />
              <OderUserStatus />
              <OderUserStatus />
              <OderUserStatus />
              <Pagination
                className="pagination-center"
                style={{ marginBottom: "-20px", marginTop: "30px" }}
                total={10}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OderUser;
