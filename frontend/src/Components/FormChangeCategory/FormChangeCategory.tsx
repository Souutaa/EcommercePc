import { Button, Input } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import React from "react";

const FormChangeCategory = () => {
  return (
    <div>
      <div className="modal-body">
        <Input.Wrapper className="mb-20" label="Brand ID">
          <Input component="button" pointer>
            <Input.Placeholder>1</Input.Placeholder>
          </Input>
        </Input.Wrapper>
        <Input.Wrapper className="mb-20" label="Name">
          <Input placeholder="Laptop" />
        </Input.Wrapper>
      </div>
      <div className="modal-footer">
        <Button
          mt="md"
          onClick={() => {
            notifications.show({
              withCloseButton: true,
              autoClose: 1500,
              message: "Cập nhật category thành công",
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

export default FormChangeCategory;
