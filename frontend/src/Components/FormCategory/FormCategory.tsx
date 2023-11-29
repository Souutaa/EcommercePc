import { IconCheck } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { Button, Input } from "@mantine/core";
import { modals } from "@mantine/modals";
import React, { useState } from "react";
import axios from "axios";

const FormCategory = (props: {onFinish: () => void}) => {
  const [categoryName, setCategoryName] = useState('');

  return (
    <div>
      <div className="modal-body">
        <Input.Wrapper className="mb-20" label="Category Name">
          <Input value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
        </Input.Wrapper>
      </div>
      <div className="modal-footer">
        <Button
          mt="md"
          onClick={async () => {
            await axios.post('http://127.0.0.1:8080/category/create', {
              categoryName
            })
            props.onFinish();
            notifications.show({
              withCloseButton: true,
              autoClose: 1500,
              message: "Thêm category thành công",
              color: "teal",
              icon: <IconCheck />,
              className: "my-notification-class",
              loading: false,
            });
            modals.closeAll();
          }}
        >
          Add Category
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

export default FormCategory;
