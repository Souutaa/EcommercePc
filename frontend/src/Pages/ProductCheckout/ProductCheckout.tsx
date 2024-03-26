import {
  ClassNames,
  ClassNamesArray,
  ComboboxItem,
  Divider,
  Flex,
  Group,
  Input,
  NativeSelect,
  Radio,
} from "@mantine/core";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import Btn from "../../Components/Button";
import CheckoutContent from "../../Components/CheckoutContent/CheckoutContent";
import CheckoutText from "../../Components/CheckoutText/CheckoutText";
import InputGrib4 from "../../Components/InputGrid/InputGrib4";
import Total from "../../Components/Total/Total";
import { PATHS } from "../../Constants/path";
import { useShopingContext } from "../../Context/ShoppingContext";
import { UserInformation } from "../InfoUser/InfoUser";
import { useAuthContext } from "../../Context/AuthContext";
import { IconCheck, IconCross, IconLoader } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import API_ADDRESS from "../../Api_Address";
import styled from ".//ProductCheckout.module.css";

function ProductCheckout() {
  const auth = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [userInfo, setUserInfo] = useState<UserInformation>({
    username: auth.auth.sub!,
    accountDetail: {
      city: "",
      default: false,
      detailedAddress: "",
      district: "",
      email: "",
      firstName: "",
      id: -1,
      lastName: "",
      phoneNumber: "",
    },
  });
  const [address, setAddress] = useState<UserInformation[] | null>();
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const cartContext = useShopingContext();
  useEffect(() => {
    const getAllUserInfo = async () => {
      try {
        const response = await axios.get(
          `http://${API_ADDRESS}:8080/userDetail/all`
        );
        setAddress(response.data);
        if (response.data.length > 0) {
          setUserInfo(
            response.data.find(
              (item: { accountDetail: { default: boolean } }) => {
                return item.accountDetail.default === true;
              }
            )
          );
        }
      } catch {}
    };
    getAllUserInfo();
  }, []);

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    notifications.show({
      withCloseButton: true,
      autoClose: 3000,
      message: `Đang xử lý`,
      color: "teal",
      icon: <IconLoader />,
      className: "my-notification-class",
      loading: true,
    });
    await axios.post(`http://${API_ADDRESS}:8080/order/create`, {
      firstName: userInfo?.accountDetail.firstName,
      lastName: userInfo?.accountDetail.lastName,
      phoneNumber: userInfo?.accountDetail.phoneNumber,
      email: userInfo?.accountDetail.email,
      city: userInfo?.accountDetail.city,
      district: userInfo?.accountDetail.district,
      detailedAddress: userInfo?.accountDetail.detailedAddress,
      note: note,
      total: cartContext.totalPrice - cartContext.totalDiscount,
      cartItems: cartContext.cartItems.map((cartItem) => {
        return {
          productLine: cartItem.productLine,
          quantity: cartItem.quantity,
        };
      }),
    });
    if (userInfo?.accountDetail.id === -1) {
      const response = await axios.post(
        `http://${API_ADDRESS}:8080/userDetail/create`,
        {
          firstName: userInfo?.accountDetail.firstName,
          lastName: userInfo?.accountDetail.lastName,
          phoneNumber: userInfo?.accountDetail.phoneNumber,
          email: userInfo?.accountDetail.email,
          city: userInfo?.accountDetail.city,
          district: userInfo?.accountDetail.district,
          detailedAddress: userInfo?.accountDetail.detailedAddress,
        }
      );
      if (address?.length === 0) {
        await axios.patch(
          `http://${API_ADDRESS}:8080/userDetail/${response.data.id}/default`
        );
      }
    }
    notifications.show({
      withCloseButton: true,
      autoClose: 1000,
      message: `Đặt hàng thành công!`,
      color: "teal",
      icon: <IconCheck />,
      className: "my-notification-class",
      onClose: () => {
        cartContext.clearCart();
        return navigate(PATHS.ORDERED);
      },
    });
  };

  const handleSubmitFormVnPay = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    notifications.show({
      message: `Đang xử lý`,
      color: "teal",
      icon: <IconLoader />,
      className: "my-notification-class",
      loading: true,
    });
    const paymentResponse = await axios.post(
      `http://${API_ADDRESS}:8080/api/v1/pay`,
      {
        firstName: userInfo?.accountDetail.firstName,
        lastName: userInfo?.accountDetail.lastName,
        phoneNumber: userInfo?.accountDetail.phoneNumber,
        email: userInfo?.accountDetail.email,
        city: userInfo?.accountDetail.city,
        district: userInfo?.accountDetail.district,
        detailedAddress: userInfo?.accountDetail.detailedAddress,
        note: note,
        total: cartContext.totalPrice - cartContext.totalDiscount,
        cartItems: cartContext.cartItems.map((cartItem) => {
          return {
            productLine: cartItem.productLine,
            quantity: cartItem.quantity,
          };
        }),
      }
    );
    setOrderId(paymentResponse.data.orderId);
    localStorage.setItem("orderId", paymentResponse.data.orderId);
    window.open(paymentResponse.data.url, "_blank")!!.focus();
    if (userInfo?.accountDetail.id === -1) {
      const response = await axios.post(
        `http://${API_ADDRESS}:8080/userDetail/create`,
        {
          firstName: userInfo?.accountDetail.firstName,
          lastName: userInfo?.accountDetail.lastName,
          phoneNumber: userInfo?.accountDetail.phoneNumber,
          email: userInfo?.accountDetail.email,
          city: userInfo?.accountDetail.city,
          district: userInfo?.accountDetail.district,
          detailedAddress: userInfo?.accountDetail.detailedAddress,
        }
      );
      if (address?.length === 0) {
        await axios.patch(
          `http://${API_ADDRESS}:8080/userDetail/${response.data.id}/default`
        );
      }
    }
  };
  useEffect(() => {
    let timerId: NodeJS.Timer;
    if (orderId) {
      timerId = setInterval(async () => {
        const paymentInfo = await axios.get(
          `http://${API_ADDRESS}:8080/order/getOrderDetail?id=${orderId}`
        );
        if (paymentInfo.data.paymentStatus !== "PENDING") {
          clearInterval(timerId);
          setIsLoading(false);
          if (paymentInfo.data.paymentStatus === "SUCCESS") {
            notifications.show({
              withCloseButton: true,
              autoClose: 500,
              message: `Đặt hàng thành công!`,
              color: "teal",
              icon: <IconCheck />,
              className: "my-notification-class",
              onClose: () => {
                cartContext.clearCart();
                localStorage.removeItem("orderId");
                return navigate(PATHS.ORDERED);
              },
            });
          } else {
            notifications.show({
              withCloseButton: true,
              autoClose: 1000,
              message: `Thanh toán thất bại!`,
              color: "red",
              icon: <IconCross />,
              className: "my-notification-class",
              onClose: () => {
                localStorage.removeItem("orderId");
              },
            });
          }
        }
      }, 2000);
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [orderId, cartContext, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    let elements: HTMLElement | null = document.getElementById("paymentType");

    if (elements?.getElementsByClassName("default")) {
      handleSubmitForm(e);
    }
    if (elements?.getElementsByClassName("vnpay")) {
      handleSubmitFormVnPay(e);
    }
    /* Your multiple functions here */
  };

  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <div className={styled["product-checkout__title"]}>
          <h1> Thông tin thanh toán</h1>
        </div>
        <div className={`${styled["product-checkout__body"]} div-8-col`}>
          <div className={styled["product-checkout__left"]}>
            {address && address.length > 0 && (
              <div style={{ width: "100%", display: "flex", columnGap: "5%" }}>
                <div style={{ flex: "1 1 50%" }}>
                  <span className={styled["product-checkout__text"]}>
                    Địa chỉ:
                  </span>
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
                      };
                    })}
                    disabled={isAddingAddress ? true : false}
                    onChange={(e) =>
                      setUserInfo(
                        address.find(
                          (addr) => +addr.accountDetail.id === +e.target.value
                        )!
                      )
                    }
                  />
                </div>
                <Flex>
                  {!isAddingAddress && (
                    <Btn
                      maintine="a"
                      customStyle={{
                        alignSelf: "flex-end",
                        justifySelf: "flex-end",
                      }}
                      onClick={() => {
                        setIsAddingAddress(true);
                        setUserInfo((prevState: any) => {
                          if (prevState) {
                            let newState = { ...prevState };
                            newState.accountDetail = {
                              city: "",
                              default: false,
                              detailedAddress: "",
                              district: "",
                              email: "",
                              firstName: "",
                              id: -1,
                              lastName: "",
                              phoneNumber: "",
                            };
                            return newState;
                          }
                        });
                      }}
                    >
                      Thêm địa chỉ mới
                    </Btn>
                  )}
                  {isAddingAddress && (
                    <Btn
                      maintine="a"
                      customStyle={{
                        alignSelf: "flex-end",
                        justifySelf: "flex-end",
                      }}
                      color="#f03a17"
                      onClick={() => {
                        setIsAddingAddress(false);
                        if (address) setUserInfo(address[0]);
                      }}
                    >
                      Hủy
                    </Btn>
                  )}
                </Flex>
              </div>
            )}
            <form
              action=""
              style={{ width: "100%", display: "grid", gap: "1.2rem" }}
            >
              <div className={styled["product-checkout__grid"]}>
                <div className={styled["product-checkout__grid-input"]}>
                  <span className={styled["product-checkout__text"]}>
                    Họ và tên đệm:
                  </span>
                  <Input.Wrapper style={{ marginRight: "8px" }}>
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
                    />
                  </Input.Wrapper>
                </div>
                <div className={styled["product-checkout__grid-input"]}>
                  <span className={styled["product-checkout__text"]}>Tên:</span>
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
                    />
                  </Input.Wrapper>
                </div>
              </div>
              {userInfo && (
                <InputGrib4
                  provinceCode={userInfo.accountDetail.city}
                  districtCode={userInfo.accountDetail.district}
                  phoneNumber={userInfo.accountDetail.phoneNumber}
                  setUserInfo={setUserInfo}
                  userInfo={userInfo}
                  isEditing={true}
                />
              )}
              <div className={styled["product-checkout__input"]}>
                <span className={styled["product-checkout__text"]}>
                  Địa chỉ chi tiết:
                </span>
                <Input.Wrapper>
                  <Input
                    size="lg"
                    radius={"md"}
                    placeholder="Số nhà, tên đường, xã, phường, thị trấn,..."
                    value={userInfo?.accountDetail.detailedAddress}
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
              <div className={styled["product-checkout__input"]}>
                <span className={styled["product-checkout__text"]}>
                  Ghi chú:
                </span>
                <Input.Wrapper>
                  <Input
                    size="lg"
                    radius={"md"}
                    placeholder="Ghi chú cho shipper"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </Input.Wrapper>
              </div>
              <div className={styled["product-checkout__receive"]}>
                <span className={styled["product-checkout__text"]}>
                  Hình thức nhận hàng:
                </span>
                <div className={styled["product-checkout__radio"]}>
                  <Radio.Group name="favoriteFramework" withAsterisk>
                    <Group mt="xs">
                      <Radio value="" label="Nhận tại cửa hàng" size="lg" />
                      <Radio value="" label="Giao hàng tận nơi" size="lg" />
                    </Group>
                  </Radio.Group>
                </div>
              </div>
              <Divider my="sm" />
              <div className={styled["product-checkout__button"]}>
                <Link to={PATHS.CART}>
                  <Btn
                    maintine="a"
                    variant="default"
                    color="#f03a17"
                    disabled={isLoading ? true : false}
                  >
                    Sửa sản phẩm
                  </Btn>
                </Link>
                <div
                  id="paymentType"
                  style={{
                    display: "flex",
                    gap: "20px",
                    minWidth: "100%",
                  }}
                >
                  <Btn
                    onClick={handleSubmitForm}
                    clsName="default"
                    type="submit"
                    maintine="a"
                    disabled={isLoading ? true : false}
                  >
                    Đặt hàng
                  </Btn>
                  <Btn
                    onClick={handleSubmitFormVnPay}
                    clsName="vnpay"
                    type="submit"
                    maintine="a"
                    disabled={isLoading ? true : false}
                  >
                    Đặt hàng và thanh toán bằng vnpay
                  </Btn>
                </div>
              </div>
            </form>
          </div>
          <div className={styled["product-checkout__right"]}>
            <CheckoutText />
            <Divider style={{ width: "100%" }}></Divider>
            <CheckoutContent />
            <Divider style={{ width: "100%" }}></Divider>
            <div className={styled["product-checkout__padding"]}>
              <Total />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCheckout;
