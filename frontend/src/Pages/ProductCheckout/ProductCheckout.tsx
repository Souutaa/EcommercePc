import {
  ComboboxItem,
  Divider,
  Group,
  Input,
  NativeSelect,
  Radio,
} from "@mantine/core";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import Btn from "../../Components/Button";
import CheckoutContent from "../../Components/CheckoutContent/CheckoutContent";
import CheckoutText from "../../Components/CheckoutText/CheckoutText";
import InputGrib4 from "../../Components/InputGrid/InputGrib4";
import Total from "../../Components/Total/Total";
import { PATHS } from "../../Constants/path";
import InputGrid2 from "../../Components/InputGrid/InputGrid2";
import axios from "axios";
import { useState, useEffect, FormEvent } from "react";
import { UserInformation } from "../InfoUser/InfoUser";
import { useShopingContext } from "../../Context/ShoppingContext";

function ProductCheckout() {
  const [userInfo, setUserInfo] = useState<UserInformation | null>();
  const [address, setAddress] = useState<UserInformation[] | null>();
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const cartContext = useShopingContext();
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

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:8080/order/create", {
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
    cartContext.clearCart();
    return navigate(PATHS.ORDERED)
  };
  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <div className="productcheckout-title">
          <h1> Thông tin thanh toán</h1>
        </div>
        <div className="productcheckout-body">
          <div className="productcheckout-left">
            <div style={{ width: "100%", display: "flex", columnGap: "5%" }}>
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
                        addr.accountDetail.default === true ? " - Mặc định" : ""
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
                customStyle={{ alignSelf: "flex-end", justifySelf: "flex-end" }}
              >
                Thêm địa chỉ mới
              </Btn>
            </div>
            <form action="" onSubmit={handleSubmitForm}>
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
              <div className="productcheckout-input">
                <span className="productcheckput-text">Địa chỉ chi tiết:</span>
                <Input.Wrapper>
                  <Input
                    placeholder="Số nhà, tên đường, xã, phường, thị trấn,..."
                    value={userInfo?.accountDetail.detailedAddress}
                  />
                </Input.Wrapper>
              </div>
              <div className="productcheckout-input">
                <span className="productcheckput-text">Ghi chú:</span>
                <Input.Wrapper>
                  <Input
                    placeholder="Ghi chú cho shipper"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </Input.Wrapper>
              </div>
              <div className="productcheckout-receive">
                <span className="productcheckput-text">
                  Hình thức nhận hàng:
                </span>
                <div className="productcheckout-radio">
                  <Radio.Group name="favoriteFramework" withAsterisk>
                    <Group mt="xs">
                      <Radio value="" label="Nhận tại cửa hàng" />
                      <Radio value="" label="Giao hàng tận nơi" />
                    </Group>
                  </Radio.Group>
                </div>
              </div>
              <Divider my="sm" />
              <div className="productcheckout-button">
                <Link to={PATHS.CART}>
                  <Btn maintine="a" variant="default" color="#f03a17">
                    Sửa sản phẩm
                  </Btn>
                </Link>
                {/* <Link
                  to={PATHS.ORDERED}
                  style={{ width: "100%", textDecoration: "none" }}
                > */}
                <Btn fullWidth type="submit" maintine="a">
                  Đặt hàng
                </Btn>
                {/* </Link> */}
              </div>
            </form>
          </div>
          <div className="productcheckout-right">
            <CheckoutText />
            <CheckoutContent />
            <div className="productcheckout-padding">
              <Total />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCheckout;
