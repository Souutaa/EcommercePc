import { Button, Input } from "@mantine/core";
import { modals } from "@mantine/modals";
import React from "react";

const FormView = () => {
  return (
    <div>
      <div className="modal-body">
        <Input.Wrapper className="mb-20" label="Line">
          <Input component="button" pointer>
            <Input.Placeholder>PC_GM_3090_I9</Input.Placeholder>
          </Input>
        </Input.Wrapper>
        <Input.Wrapper className="mb-20" label="Name">
          <Input component="button" pointer>
            <Input.Placeholder>
              Laptop gaming MSI Katana 15 B13VGK 1211VN
            </Input.Placeholder>
          </Input>
        </Input.Wrapper>
        <span className="text-label">Thumbnail</span>
        <div className="product-thumbnail">
          <img
            style={{ width: "200px", height: "200px" }}
            src="/img/img(1).png"
            alt=""
          />
        </div>
        <span className="text-label">Image</span>
        <div className="product-thumbnail">
          <img
            style={{ width: "200px", height: "200px" }}
            src="/img/img(1).png"
            alt=""
          />
        </div>

        <div className="input-2  mb-20">
          <Input.Wrapper style={{ width: "49%" }} label="Price">
            <Input component="button" pointer>
              <Input.Placeholder>51,310,000</Input.Placeholder>
            </Input>
          </Input.Wrapper>
          <Input.Wrapper style={{ width: "49%" }} label="NameDiscount(%)">
            <Input component="button" pointer>
              <Input.Placeholder>0</Input.Placeholder>
            </Input>
          </Input.Wrapper>
        </div>
        <Input.Wrapper
          style={{ width: "49%" }}
          className="mb-20"
          label="Warranty Period"
        >
          <Input component="button" pointer>
            <Input.Placeholder>Không có bảo hành</Input.Placeholder>
          </Input>
        </Input.Wrapper>
        <div className="input-2  mb-20">
          <Input.Wrapper style={{ width: "49%" }} label="Brand">
            <Input component="button" pointer>
              <Input.Placeholder>No Brand</Input.Placeholder>
            </Input>
          </Input.Wrapper>
          <Input.Wrapper style={{ width: "49%" }} label="Category">
            <Input component="button" pointer>
              <Input.Placeholder>Laptop</Input.Placeholder>
            </Input>
          </Input.Wrapper>
        </div>
        <Input.Wrapper label="Infomation">
          <Input component="button" pointer className="mb-20">
            <Input.Placeholder>
              MAINBOARD : Mainboard MSI Z590 Tomahawk WIFI
            </Input.Placeholder>
          </Input>
          <Input component="button" pointer className="mb-20">
            <Input.Placeholder>
              CPU : CPU Intel Core i9 11900F (2.50 Up to 5.20GHz, 16M, 8 Cores
              16 Threads) Box Chính Hãng (Không GPU)
            </Input.Placeholder>
          </Input>
          <Input component="button" pointer className="mb-20">
            <Input.Placeholder>
              RAM : Ram DDR4 ADATA XPG SPECTRIX D50 8G/3600 RGB GREY
              (AX4U36008G18I-ST50)
            </Input.Placeholder>
          </Input>
          <Input component="button" pointer className="mb-20">
            <Input.Placeholder>
              SSD : Ổ cứng SSD 500G Samsung 980 Pro NVMe PCIe Gen 4.0 x4 V-NAND
              M.2 2280 (MZ-V8P500BW)
            </Input.Placeholder>
          </Input>
        </Input.Wrapper>
      </div>
      <div className="modal-footer">
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

export default FormView;
