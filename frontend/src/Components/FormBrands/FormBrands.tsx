import { IconCheck } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { Button, Input } from "@mantine/core";
import { modals } from "@mantine/modals";
import React from "react";

const FormBrands = () => {
  return (
    <div>
      <div className="modal-body">
        <Input.Wrapper className="mb-20" label="Line">
          <Input />
        </Input.Wrapper>
        <Input.Wrapper className="mb-20" label="Name">
          <Input />
        </Input.Wrapper>
      </div>
      <div className="modal-footer">
        <Button
          mt="md"
          onClick={() => {
            notifications.show({
              withCloseButton: true,
              autoClose: 1500,
              message: "Thêm brand thành công",
              color: "teal",
              icon: <IconCheck />,
              className: "my-notification-class",
              loading: false,
            });
            modals.closeAll();
          }}
        >
          Add Brand
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

export default FormBrands;
