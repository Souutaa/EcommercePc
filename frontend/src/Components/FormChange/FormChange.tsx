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

const FormChange = () => {
  const [inputInfo, setInputInfo] = useState([""]); // Danh sách các input

  const handleAddInputInfo = () => {
    setInputInfo([...inputInfo, ""]); // Thêm một input mới vào danh sách
  };

  return (
    <div>
      <div className="modal-body">
        <Input.Wrapper className="mb-20" label="Line">
          <Input component="button" pointer>
            <Input.Placeholder>PC_GM_3090_I9</Input.Placeholder>
          </Input>
        </Input.Wrapper>
        <Input.Wrapper className="mb-20" label="Name">
          <Input placeholder="Laptop gaming MSI Katana 15 B13VGK 1211VN" />
        </Input.Wrapper>
        <span className="text-label">Thumbnail</span>
        <div className="product-thumbnail">
          <img
            style={{ width: "200px", height: "200px" }}
            src="/img/img(1).png"
            alt=""
          />
        </div>

        <FileInput
          className="mb-20"
          label="Select New Thumbnail"
          placeholder="Không có file nào được chọn"
        />
        <span className="text-label">Image</span>
        <div className="product-thumbnail">
          <img
            style={{ width: "200px", height: "200px" }}
            src="/img/img(1).png"
            alt=""
          />
        </div>
        <FileInput
          className="mb-20"
          label="Add New Image"
          placeholder="Không có file nào được chọn"
        />
        <div className="input-2  mb-20">
          <NumberInput
            style={{ width: "49%" }}
            label="Price"
            placeholder="51,310,000"
          />
          <NumberInput
            style={{ width: "49%" }}
            label="Discount"
            placeholder="0"
          />
        </div>
        <NativeSelect
          className="mb-20"
          style={{ width: "50%" }}
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
          <Input placeholder="MAINBOARD	: Mainboard MSI Z590 Tomahawk WIFI" />
          <Input placeholder="CPU	: CPU Intel Core i9 11900F (2.50 Up to 5.20GHz, 16M, 8 Cores 16 Threads) Box Chính Hãng (Không GPU)" />
          <Input placeholder="RAM	: Ram DDR4 ADATA XPG SPECTRIX D50 8G/3600 RGB GREY (AX4U36008G18I-ST50)" />
          <Input placeholder="SSD	: Ổ cứng SSD 500G Samsung 980 Pro NVMe PCIe Gen 4.0 x4 V-NAND M.2 2280 (MZ-V8P500BW)" />
          {inputInfo.map((input, index) => (
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
              message: "Cập nhật sản phẩm thành công",
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

export default FormChange;
