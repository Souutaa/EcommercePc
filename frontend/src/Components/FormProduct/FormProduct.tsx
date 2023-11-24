import { IconCheck } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import {
  Button,
  FileInput,
  Input,
  NativeSelect,
  NumberInput,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import React, { useState } from "react";

const FromProduct = () => {
  const [inputInfo, setInputInfo] = useState([""]); // Danh sách các input

  const handleAddInputInfo = () => {
    setInputInfo([...inputInfo, ""]); // Thêm một input mới vào danh sách
  };
  const [inputSeri, setInputSeri] = useState([""]); // Danh sách các input

  const handleAddInputSeri = () => {
    setInputSeri([...inputSeri, ""]); // Thêm một input mới vào danh sách
  };
  return (
    <div>
      <div className="modal-body">
        <Input.Wrapper className="mb-20" label="Line">
          <Input />
        </Input.Wrapper>
        <Input.Wrapper className="mb-20" label="Name">
          <Input />
        </Input.Wrapper>
        <FileInput
          className="mb-20"
          label="Thumbnail"
          placeholder="Không có file nào được chọn"
        />
        <FileInput
          className="mb-20"
          label="Image"
          placeholder="Không có file nào được chọn"
        />
        <div className="input-2  mb-20">
          <NumberInput style={{ width: "49%" }} label="Price" />
          <NumberInput style={{ width: "49%" }} label="Discount" />
        </div>
        <NativeSelect
          className="mb-20"
          style={{ width: "49%" }}
          label="Warranty Period"
          placeholder="Không có bảo hành"
          data={[
            "Không có bảo hành",
            "3 tháng",
            "6 tháng",
            "12 tháng",
            "24 tháng",
            "32 tháng",
          ]}
        />
        <div className="input-2 mb-20">
          <NativeSelect
            style={{ width: "49%" }}
            label="Brand"
            placeholder="Acer"
            data={[
              "Acer",
              "AMD",
              "Dell",
              "HP",
              "Intel",
              "Logitech",
              "MSI",
              "No Brand",
              "NVIDIA",
            ]}
          />
          <NativeSelect
            style={{ width: "49%" }}
            label="Category"
            placeholder="Laptop"
            data={[
              "Laptop",
              "PC",
              "Keyboard",
              "Mice",
              "HeadPhone",
              "CPU",
              "VGA",
            ]}
          />
        </div>
        <Input.Wrapper className="mb-20" label="Information">
          <span className="moreinfo-text" onClick={handleAddInputInfo}>
            More Info
          </span>
          {inputInfo.map((input, index) => (
            <Input />
          ))}
        </Input.Wrapper>
        <Input.Wrapper className="mb-20" label="Serial Number ">
          <span className="moreinfo-text" onClick={handleAddInputSeri}>
            More S/N
          </span>
          {inputSeri.map((input, index) => (
            <Input />
          ))}
        </Input.Wrapper>
      </div>
      <div className="modal-footer">
        <Button
          mt="md"
          onClick={() => {
            notifications.show({
              withCloseButton: true,
              autoClose: 1500,
              message: "Thêm sản phẩm thành công",
              color: "teal",
              icon: <IconCheck />,
              className: "my-notification-class",
              loading: false,
            });
            modals.closeAll();
          }}
        >
          Add Product
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

export default FromProduct;
