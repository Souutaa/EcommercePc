import {
  NativeSelect,
  Input,
  Select,
  ComboboxOption,
  ComboboxItem,
} from "@mantine/core";
import axios from "axios";
import { useState, useEffect } from "react";

type Districts = {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  province_code: number;
};

export type Division = {
  code: number;
  name: string;
  division_type: string;
  codename: string;
  phone_code: number;
  districts: Districts[];
};

function InputGrib4() {
  const [division, setDivision] = useState<Division[]>([]);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    console.log("get division data from api");
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://provinces.open-api.vn/api/?depth=2"
        );
        console.log("division=> ", res);
        const data = await res.data;
        setDivision(data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="productcheckout-grid">
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Số điện thoại:</span>
          <Input.Wrapper style={{ marginRight: "8px" }}>
            <Input placeholder="0xx xxx xxxx" />
          </Input.Wrapper>
        </div>
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Email:</span>
          <Input.Wrapper style={{ marginLeft: "8px" }}>
            <Input placeholder="abc@gmail.com" />
          </Input.Wrapper>
        </div>
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Tỉnh, thành phố:</span>
          <NativeSelect
            style={{ marginRight: "8px" }}
            placeholder="Chọn tỉnh, thành phố"
            data={division.map((division): ComboboxItem => {
              return {
                value: division.code.toString(),
                label: division.name,
                disabled: false,
              };
            })}
            onChange={(e) => setSelected(e.target.value)}
          />
        </div>
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Quận, huyện:</span>
          <NativeSelect
            style={{ marginLeft: "8px" }}
            placeholder="Native select"
            data={division
              .find((division) => +division.code === +selected)
              ?.districts.map((e): ComboboxItem => {
                return {
                  value: e.code.toString(),
                  label: e.name,
                  disabled: false,
                };
              })}
          />
        </div>
      </div>
    </>
  );
}

export default InputGrib4;
