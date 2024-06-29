import { NativeSelect, Input, ComboboxItem } from "@mantine/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { UserInformation } from "../../Pages/InfoUser/InfoUser";
import data from "./provinces.json";
import styled from ".//InpurGrid.module.css";

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
  provinceCode: string;
  districtCode: string;
  phoneNumber: string;
  setUserInfo: Function;
  userInfo: UserInformation | undefined;
  isEditing: boolean;
}

function InputGrib4(props: props) {
  const [division, setDivision] = useState<Division[]>([]);
  const [selectedProvince, setSelectedProvince] = useState(props.provinceCode);
  const [selectedDistrict, setSelectedDistrict] = useState(props.districtCode);
  useEffect(() => {
    const fetchProvices = async () => {
      try {
        const res = await fetch("./provinces.json").then((response) => {
          return response.json();
        });
        console.log(res);
        setDivision([]);
      } catch (error) {
        console.log("error=> ", error);
      }
    };
    fetchProvices();
  }, []);
  useEffect(() => {
    setSelectedDistrict(props.districtCode);
    setSelectedProvince(props.provinceCode);
  }, [props]);
  return (
    <>
      <div className={styled["product-checkout__grid"]}>
        <div className={styled["product-checkout__grid-input"]}>
          <span className={styled["product-checkout__text"]}>
            Số điện thoại:
          </span>
          <Input.Wrapper>
            <Input
              size="lg"
              radius={"md"}
              placeholder="0xx xxx xxxx"
              value={props.phoneNumber}
              disabled={props.isEditing ? false : true}
              onChange={(e) => {
                if (props.userInfo && props.isEditing)
                  props.setUserInfo({
                    accountDetail: {
                      ...props.userInfo.accountDetail,
                      phoneNumber: e.target.value,
                    },
                    username: props.userInfo.username,
                  });
              }}
            />
          </Input.Wrapper>
        </div>
        <div className={styled["product-checkout__grid-input"]}>
          <span className={styled["product-checkout__text"]}>Email:</span>
          <Input.Wrapper>
            <Input
              size="lg"
              radius={"md"}
              placeholder="abc@gmail.com"
              value={props.userInfo?.accountDetail.email}
              disabled={props.isEditing ? false : true}
              onChange={(e) => {
                if (props.userInfo && props.isEditing)
                  props.setUserInfo({
                    accountDetail: {
                      ...props.userInfo.accountDetail,
                      email: e.target.value,
                    },
                    username: props.userInfo.username,
                  });
              }}
            />
          </Input.Wrapper>
        </div>
        <div className={styled["product-checkout__grid-input"]}>
          <span className={styled["product-checkout__text"]}>
            Tỉnh, thành phố:
          </span>
          <NativeSelect
            size="lg"
            radius={"md"}
            placeholder="Chọn tỉnh, thành phố"
            value={selectedProvince}
            disabled={props.isEditing ? false : true}
            // data={division.map((division): ComboboxItem => {
            //   return {
            //     value: division.name,
            //     label: division.name,
            //     disabled: false,
            //   };
            // })}
            data={data.map((division): ComboboxItem => {
              return {
                value: division.name,
                label: division.name,
                disabled: false,
              };
            })}
            onChange={(e) => {
              if (props.userInfo && props.isEditing) {
                setSelectedProvince(e.target.value);
                props.setUserInfo({
                  accountDetail: {
                    ...props.userInfo.accountDetail,
                    city: e.target.value,
                  },
                  username: props.userInfo.username,
                });
              }
            }}
          />
        </div>
        <div className={styled["product-checkout__grid-input"]}>
          <span className={styled["product-checkout__text"]}>Quận, huyện:</span>
          <NativeSelect
            size="lg"
            radius={"md"}
            placeholder="Native select"
            value={selectedDistrict}
            disabled={props.isEditing ? false : true}
            data={data
              .find((division) => {
                return division.name === selectedProvince;
              })
              ?.districts.map((e): ComboboxItem => {
                return {
                  value: e.name,
                  label: e.name,
                  disabled: false,
                };
              })}
            onChange={(e) => {
              if (props.userInfo && props.isEditing) {
                setSelectedDistrict(e.target.value);
                props.setUserInfo({
                  accountDetail: {
                    ...props.userInfo.accountDetail,
                    district: e.target.value,
                  },
                  username: props.userInfo.username,
                });
              }
            }}
          />
        </div>
      </div>
    </>
  );
}

export default InputGrib4;
