import { Avatar, Button, ComboboxItem, Divider, Input, NativeSelect } from "@mantine/core";
import UserInfor from "../../Components/UserInfor/UserInfor";
import UserOder from "../../Components/UserOrder/UserOrder";
import InputGrid2 from "../../Components/InputGrid/InputGrid2";
import InputGrib4 from "../../Components/InputGrid/InputGrib4";
import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import Btn from "../../Components/Button";

export interface UserInformation {
  accountDetail: {
    city: string;
    detailedAddress: string;
    district: string;
    firstName: string;
    id: number;
    lastName: string;
    default: boolean;
    phoneNumber: string;
    email: string;
  };
  email: string;
  username: string;
}

export interface UserInformation {
  accountDetail: {
    city: string;
    detailedAddress: string;
    district: string;
    firstName: string;
    id: number;
    lastName: string;
    default: boolean;
    phoneNumber: string;
    email: string;
  };
  email: string;
  username: string;
}

function InfoUser() {
  const [userInfo, setUserInfo] = useState<UserInformation>();
  const [address, setAddress] = useState<UserInformation[] | null>();
  useEffect(() => {
    const getAllUserInfo = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/userDetail/all"
        );
        setAddress(response.data);
        setUserInfo(
          response.data.find(
            (item: { accountDetail: { default: boolean } }) => {
              return item.accountDetail.default === true;
            }
          )
        );
      } catch {}
    };
    getAllUserInfo();
  }, []);

  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <div className="infouser-content">
          <div className="infouser-sidebar">
            <div className="infouser-avatar">
              <Avatar style={{ marginTop: "20px" }}></Avatar>
              <div className="margin-right">
                <UserInfor />
              </div>
            </div>
            <UserOder />
          </div>
          <div className="infouser-container">
            <h3 className="infouser-title">Hồ sơ của tôi</h3>
            <h5 className="infouser-text">
              Quản lý thông tin hồ sơ để bảo mật tài khoản
            </h5>
            <Divider></Divider>
            <form action="">
              <div className="infouser-input" style={{ width: "100%", display: "flex", columnGap: "5%" }}>
                <div style={{ flex: "1 1 50%" }}>
                  <span className="productcheckput-text">Địa chỉ:</span>
                  <NativeSelect
                    style={{ width: "100%" }}
                    placeholder="Native select"
                    data={address?.map((addr): ComboboxItem => {
                      return {
                        value: addr.accountDetail.id?.toString() ?? "",
                        label: `${addr.accountDetail.detailedAddress} ${
                          addr.accountDetail.district
                        } ${addr.accountDetail.city}${
                          addr.accountDetail.default === true
                            ? " - Mặc định"
                            : ""
                        }`,
                        disabled: false,
                      };
                    })}
                    onChange={(e) =>
                      setUserInfo(
                        address?.find(
                          (addr) => +addr.accountDetail.id === +e.target.value
                        )
                      )
                    }
                  />
                </div>
                <Btn
                  maintine="a"
                  customStyle={{
                    alignSelf: "flex-end",
                    justifySelf: "flex-end",
                  }}
                >
                  Thêm địa chỉ mới
                </Btn>
              </div>
              <div className="infouser-input">
                <InputGrid2
                  firstName={userInfo?.accountDetail.firstName ?? ""}
                  lastName={userInfo?.accountDetail.lastName ?? ""}
                />
                <InputGrib4
                  provinceCode={userInfo?.accountDetail.city ?? ""}
                  districtCode={userInfo?.accountDetail.district ?? ""}
                  email={userInfo?.email ?? ""}
                  phoneNumber={userInfo?.accountDetail.phoneNumber ?? ""}
                />
              </div>
              <div className="infouser-input">
                <span className="infouser-text-input">Địa chỉ chi tiết:</span>
                <Input.Wrapper>
                  <Input
                    placeholder="208 Trần Bình Trọng"
                    value={userInfo?.accountDetail.detailedAddress}
                  />
                </Input.Wrapper>
              </div>
              <Button style={{ display: "flex", margin: "6px 40px 40px 40px" }}>
                Thay đổi
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoUser;
