import {
  Avatar,
  Button,
  ComboboxItem,
  Divider,
  Flex,
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
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import ChangePass from "../../Components/ChangePass/ChangePass";
import ChangeMail from "../../Components/ChangeMail/ChangePass";
import API_ADDRESS from "../../Api_Address";
import styled from ".//InfoUser.module.css";
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
  const [userInfo, setUserInfo] = useState<UserInformation>();
  const [address, setAddress] = useState<UserInformation[] | null>([]);
  const [preserveValue, setPreserveValue] = useState<UserInformation>();
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getAllUserInfo = async () => {
      try {
        const response = await axios.get(
          `http://${API_ADDRESS}:8080/userDetail/all`
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

  const handleSubmitChange = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (userInfo) {
        let id = userInfo.accountDetail.id;
        let updatedInfo = {
          firstName: userInfo.accountDetail.firstName,
          lastName: userInfo.accountDetail.lastName,
          detailedAddress: userInfo.accountDetail.detailedAddress,
          district: userInfo.accountDetail.district,
          city: userInfo.accountDetail.city,
          phoneNumber: userInfo.accountDetail.phoneNumber,
          email: userInfo.accountDetail.email,
        };
        await axios.patch(
          `http://${API_ADDRESS}:8080/userDetail/${id}/update`,
          updatedInfo
        );

        setAddress((prevState) => {
          let newState: UserInformation[] = [];
          if (Array.isArray(prevState)) {
            newState = [...prevState];
            let newInfo = newState.find(
              (item) => item.accountDetail.id === userInfo.accountDetail.id
            );
            if (newInfo && userInfo)
              newInfo.accountDetail = {
                ...updatedInfo,
                id: userInfo.accountDetail.id,
                default: userInfo.accountDetail.default,
              };
          }
          return newState;
        });
        setIsEditing(false);
      }
    } catch {}
  };

  const handleSetDefaultAddress = async (id: number) => {
    try {
      await axios.patch(`http://${API_ADDRESS}:8080/userDetail/${id}/default`);
      setAddress((prevState) => {
        let newState: UserInformation[] = [];
        if (Array.isArray(prevState)) {
          newState = [...prevState];
          newState.forEach((item) => {
            item.accountDetail.id === id
              ? (item.accountDetail.default = true)
              : (item.accountDetail.default = false);
          });
        }
        return newState;
      });
    } catch {}
  };

  const handleDeleteUserDetail = async (id: number) => {
    await axios.delete(`http://${API_ADDRESS}:8080/userDetail/delete?id=${id}`);
    setAddress((prevState) => {
      let newState: UserInformation[] = [];
      if (Array.isArray(prevState)) {
        newState = [...prevState];
        newState.splice(
          newState.findIndex((item) => item.accountDetail.id === id),
          1
        );
      }
      return newState;
    });
  };

  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <div className="infouser-content div-8-col" style={{ gap: "4rem" }}>
          <div className="infouser-sidebar">
            <div className="infouser-avatar">
              <Avatar size={"lg"} style={{ marginTop: "20px" }}></Avatar>
              <UserInfor />
            </div>
            <UserOder />
            <ChangePass />
            <ChangeMail />
          </div>
          <div className={styled["info-user__container"]}>
            <Flex
              style={{ width: "100%", padding: "1.6rem 3rem " }}
              justify={"space-between"}
              align={"center"}
            >
              <h3 className="infouser-title">Hồ sơ của tôi</h3>
              <Btn
                maintine="a"
                customStyle={{
                  alignSelf: "center",
                  justifySelf: "flex-end",
                }}
                style={{}}
                color="#12e17b"
                onClick={() => {
                  console.log(PATHS);
                  navigate(PATHS.ADDUSERINFO);
                }}
              >
                Thêm địa chỉ mới
              </Btn>
            </Flex>
            <Divider></Divider>
            <form action="" onSubmit={handleSubmitChange}>
              <div
                className={styled["info-user__wrapper"]}
                style={{ width: "100%", display: "flex", columnGap: "5%" }}
              >
                <div style={{ flex: "1 1 50%" }}>
                  <span className={styled["info-user__label"]}>Địa chỉ:</span>
                  <NativeSelect
                    size="lg"
                    radius={"md"}
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
                {!userInfo?.accountDetail.default && (
                  <Btn
                    maintine="a"
                    customStyle={{
                      alignSelf: "start",
                      justifySelf: "flex-end",
                      padding: ".4rem .8rem",
                      fontSize: "1.2rem",
                    }}
                    onClick={() => {
                      if (userInfo) {
                        handleSetDefaultAddress(userInfo?.accountDetail.id);
                      }
                    }}
                  >
                    Đặt mặc định
                  </Btn>
                )}
              </div>
              <div className={styled["info-user__wrapper"]}>
                <div className={styled["info-user__wrapper-2-col"]}>
                  <div className={styled["info-user__form-group"]}>
                    <span className={styled["info-user__label"]}>
                      Họ và tên đệm:
                    </span>
                    <Input.Wrapper>
                      <Input
                        size="lg"
                        radius={"md"}
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
                  <div className={styled["info-user__form-group"]}>
                    <span className={styled["info-user__label"]}>Tên:</span>
                    <Input.Wrapper>
                      <Input
                        size="lg"
                        radius={"md"}
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
                <InputGrib4
                  provinceCode={userInfo?.accountDetail.city ?? ""}
                  districtCode={userInfo?.accountDetail.district ?? ""}
                  phoneNumber={userInfo?.accountDetail.phoneNumber ?? ""}
                  setUserInfo={setUserInfo}
                  userInfo={userInfo}
                  isEditing={isEditing}
                />
                <div className={styled["info-user__form-group"]}>
                  <span className={styled["info-user__label"]}>
                    Địa chỉ chi tiết:
                  </span>
                  <Input.Wrapper>
                    <Input
                      size="lg"
                      radius={"md"}
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
                <Flex>
                  <Button
                    type="submit"
                    style={{ display: "flex", margin: "6px 40px 40px 40px" }}
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
                  <Button
                    style={{ display: "flex", margin: "6px 40px 40px auto" }}
                    onClick={() => {
                      if (userInfo)
                        handleDeleteUserDetail(userInfo.accountDetail.id);
                    }}
                  >
                    Xóa
                  </Button>
                </Flex>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoUser;
