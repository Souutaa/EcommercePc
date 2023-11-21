import { NativeSelect, Input, ComboboxItem } from "@mantine/core";
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

interface props {
  provinceCode: string,
  districtCode: string,
  phoneNumber: string,
  email: string
}

function InputGrib4(props: props) {
  const [division, setDivision] = useState<Division[]>([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  useEffect(() => {
    const provinceAxios = axios.create({});
    const fetchProvices = async () => {
      try {
        const res = await provinceAxios.get(
          "http://provinces.open-api.vn/api/?depth=2"
        );
        const data = await res.data;
        setDivision(data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };
    fetchProvices();
  }, []);

  return (
    <>
      <div className="productcheckout-grid">
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Số điện thoại:</span>
          <Input.Wrapper style={{ marginRight: "8px" }}>
            <Input placeholder="0xx xxx xxxx" value={props.email}/>
          </Input.Wrapper>
        </div>
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Email:</span>
          <Input.Wrapper style={{ marginLeft: "8px" }}>
            <Input placeholder="abc@gmail.com" value={props.phoneNumber}/>
          </Input.Wrapper>
        </div>
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Tỉnh, thành phố:</span>
          <NativeSelect
            style={{ marginRight: "8px" }}
            placeholder="Chọn tỉnh, thành phố"
            value={selectedProvince ? selectedProvince : props.provinceCode}
            data={division.map((division): ComboboxItem => {
              return {
                value: division.code.toString(),
                label: division.name,
                disabled: false,
              };
            })}
            onChange={(e) => setSelectedProvince(e.target.value)}
          />
        </div>
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Quận, huyện:</span>
          <NativeSelect
            style={{ marginLeft: "8px" }}
            placeholder="Native select"
            value={selectedDistrict ? selectedDistrict : props.districtCode}
            data={division
              .find(
                (division) =>
                  +division.code ===
                  (!selectedProvince ? +props.districtCode : +selectedProvince)
              )
              ?.districts.map((e): ComboboxItem => {
                return {
                  value: e.code.toString(),
                  label: e.name,
                  disabled: false,
                };
              })}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default InputGrib4;
