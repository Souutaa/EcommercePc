import { Button, Input, NativeSelect } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import React from "react";

const FormChangeUser = () => {
  return (
    <div>
      <div className="modal-body">
        <div className="input-2">
          <Input.Wrapper style={{ width: "49%" }} className="mb-20" label="Họ">
            <Input placeholder="Lê Thái" />
          </Input.Wrapper>
          <Input.Wrapper style={{ width: "49%" }} className="mb-20" label="Tên">
            <Input placeholder="Vi" />
          </Input.Wrapper>
        </div>
        <div className="input-2">
          <Input.Wrapper
            style={{ width: "49%" }}
            className="mb-20"
            label="Email"
          >
            <Input placeholder="abc@gmail.com" />
          </Input.Wrapper>
          <Input.Wrapper
            style={{ width: "49%" }}
            className="mb-20"
            label="Điện thoại"
          >
            <Input placeholder="0123273621" />
          </Input.Wrapper>
        </div>
        <div className="input-2">
          <NativeSelect
            style={{ width: "49%" }}
            label="Tỉnh thành phố"
            data={["TP.HCM", "Hà Nội"]}
          />

          <NativeSelect
            style={{ width: "49%" }}
            label="Quận huyện"
            data={["Quận 7", "Quận 8"]}
          />
        </div>
        <Input.Wrapper className="mb-20" label="Địa chỉ chi tiết">
          <Input placeholder="Số nhà, tên đường, xã, phường, thị trấn..." />
        </Input.Wrapper>
        <NativeSelect
          style={{ width: "49%" }}
          label="Role"
          data={["Admin", "Người dùng", "Nhân viên", "Testing"]}
        />
      </div>
      <div className="modal-footer">
        <Button
          mt="md"
          onClick={() => {
            notifications.show({
              withCloseButton: true,
              autoClose: 1500,
              message: "Cập nhật thông tin tài khoản thành công",
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
        <Button
          style={{ backgroundColor: "#eef2f7", color: "black" }}
          onClick={() => modals.closeAll()}
          mt="md"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default FormChangeUser;
