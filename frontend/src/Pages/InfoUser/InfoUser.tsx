import {
  Avatar,
  Button,
  ComboboxItem,
  Divider,
  Input,
  NativeSelect,
} from "@mantine/core";
import UserInfor from "../../Components/UserInfor/UserInfor";
import UserOder from "../../Components/UserOrder/UserOrder";
import InputGrib4 from "../../Components/InputGrid/InputGrib4";
import { FormEvent, useEffect, useState } from "react";
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
  username: string;
}

function InfoUser() {
  console.log("re-render");
  const [userInfo, setUserInfo] = useState<UserInformation>();
  const [address, setAddress] = useState<UserInformation[] | null>();
  const [preserveValue, setPreserveValue] = useState<UserInformation>();
  const [isEditing, setIsEditing] = useState(false);
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

  const handleSubmitChange = (e: FormEvent) => {
    e.preventDefault();
    console.log(userInfo);
  };

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
            <form action="" onSubmit={handleSubmitChange}>
              <div
                className="infouser-input"
                style={{ width: "100%", display: "flex", columnGap: "5%" }}
              >
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
                    onChange={(e) => {
                      setUserInfo(
                        address?.find(
                          (addr) => +addr.accountDetail.id === +e.target.value
                        )
                      );
                    }}
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
                <>
                  <div className="productcheckout-grid">
                    <div className="productcheckout-grid-input">
                      <span className="productcheckput-text">
                        Họ và tên đệm:
                      </span>
                      <Input.Wrapper style={{ marginRight: "8px" }}>
                        <Input
                          placeholder="Nguyễn"
                          value={userInfo?.accountDetail.firstName}
                          onChange={(e) => {
                            if (userInfo)
                              setUserInfo({
                                accountDetail: {
                                  ...userInfo.accountDetail,
                                  firstName: e.target.value,
                                },
                                username: userInfo.username,
                              });
                          }}
                          disabled={isEditing ? false : true}
                        />
                      </Input.Wrapper>
                    </div>
                    <div className="productcheckout-grid-input">
                      <span className="productcheckput-text">Tên:</span>
                      <Input.Wrapper style={{ marginLeft: "8px" }}>
                        <Input
                          placeholder="Lương"
                          value={userInfo?.accountDetail.lastName}
                          onChange={(e) => {
                            if (userInfo)
                              setUserInfo({
                                accountDetail: {
                                  ...userInfo.accountDetail,
                                  lastName: e.target.value,
                                },
                                username: userInfo.username,
                              });
                          }}
                          disabled={isEditing ? false : true}
                        />
                      </Input.Wrapper>
                    </div>
                  </div>
                </>
                <InputGrib4
                  provinceCode={userInfo?.accountDetail.city ?? ""}
                  districtCode={userInfo?.accountDetail.district ?? ""}
                  phoneNumber={userInfo?.accountDetail.phoneNumber ?? ""}
                  setUserInfo={setUserInfo}
                  userInfo={userInfo}
                  isEditing={isEditing}
                />
              </div>
              <div className="infouser-input">
                <span className="infouser-text-input">Địa chỉ chi tiết:</span>
                <Input.Wrapper>
                  <Input
                    placeholder="208 Trần Bình Trọng"
                    value={userInfo?.accountDetail.detailedAddress}
                    disabled={isEditing ? false : true}
                    onChange={(e) => {
                      if (userInfo)
                        setUserInfo({
                          accountDetail: {
                            ...userInfo.accountDetail,
                            detailedAddress: e.target.value,
                          },
                          username: userInfo.username,
                        });
                    }}
                  />
                </Input.Wrapper>
              </div>
              {!isEditing ? (
                <Button
                  onClick={(e) => {
                    setPreserveValue(userInfo);
                    setIsEditing(true);
                  }}
                  style={{ display: "flex", margin: "6px 40px 40px 40px" }}
                >
                  Thay đổi
                </Button>
              ) : (
                <>
                  <Button
                    type="submit"
                    style={{ display: "flex", margin: "6px 40px 40px 40px" }}
                    onClick={() => {
                      console.log(userInfo);
                    }}
                  >
                    Lưu
                  </Button>
                  <Button
                    onClick={(e) => {
                      setUserInfo(preserveValue);
                      setIsEditing(false);
                    }}
                    style={{ display: "flex", margin: "6px 40px 40px 40px" }}
                  >
                    Hủy
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoUser;
