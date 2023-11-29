import { IconCheck } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { Button, ComboboxItem, Input, NativeSelect } from "@mantine/core";
import { modals } from "@mantine/modals";
import React, { useCallback, useEffect, useState } from "react";
import { Category } from "../FormChange/FormChange";
import axios from "axios";

const FormBrands = (props: {onFinish: () => void}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState(-1);
  const [brandName, setBrandName] = useState("");
  const fetchCategories = useCallback(async () => {
    const response = await axios.get(
      "http://127.0.0.1:8080/category/all/simple?active=false"
    );
    setCategories(response.data);
  }, []);
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div>
      <div className="modal-body">
        <NativeSelect
          style={{ width: "49%" }}
          label="Category"
          value={categoryId}
          data={
            categories
              ? categories.map((item): ComboboxItem => {
                  if (categoryId === -1) setCategoryId(+item.id);
                  return {
                    value: item.id,
                    label: item.name,
                    disabled: false,
                  };
                })
              : []
          }
          onChange={(event) => {
            setCategoryId(+event.target.value);
          }}
        />
        <Input.Wrapper className="mb-20" label="Name">
          <Input
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
        </Input.Wrapper>
      </div>
      <div className="modal-footer">
        <Button
          mt="md"
          onClick={async () => {
            await axios.post("http://127.0.0.1:8080/brand/create", {
              brandName,
              categoryId,
            });
            props.onFinish();
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
