import { Button, Divider, MantineProvider, Text, rem } from "@mantine/core";
import { ModalsProvider, modals } from "@mantine/modals";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { CartItem, useShopingContext } from "../../../Context/ShoppingContext";
import formatPrice from "../../../Helper/formatPrice";
import { notifications } from "@mantine/notifications";
import API_ADDRESS from "../../../Api_Address";
import styled from ".//ProductCart.module.css";
function ProductCarts() {
  const { cartItems, increaseQty, decreaseQty, removeCartItem, checkCart } =
    useShopingContext();

  const openDeleteModal = (item: CartItem) => {
    modals.openConfirmModal({
      title: "Xác nhận",
      centered: true,
      children: <Text size="sm">Bạn có muốn xóa sản phẩm này</Text>,
      labels: { confirm: "Có", cancel: "Không" },
      confirmProps: { color: "red" },
      onCancel: () => {
        console.log("Cancel");
      },
      onConfirm: () => {
        removeCartItem(item.id);
      },
    });
  };

  return (
    <>
      {cartItems.map((item) => {
        return (
          <div
            key={item.id}
            className={`${styled["product-cart__item"]} div-16-col`}
          >
            <div className={styled["product-cart__item-img"]}>
              <img
                style={{ width: "100%", height: "auto", borderRadius: ".4rem" }}
                src={`http://${API_ADDRESS}:8080/product/get-file?filePath=${item.thumbnailUri}`}
                alt=""
              />
            </div>
            <div className={styled["product-cart__info"]}>
              <div className={styled["product-cart__name"]}>
                {item.productName}
              </div>
              <span className={styled["product-cart--color"]}>
                Màu sắc: Black
              </span>
            </div>
            <span className={styled["product-cart__price"]}>
              {formatPrice(item.price)}
            </span>
            <div className={styled["product-cart__quality"]}>
              <Button
                style={{
                  width: "2.4rem",
                }}
                className="button-plus"
                radius={"sm"}
                disabled={!checkCart(item.id, item.stock) ? true : false}
                onClick={() => {
                  increaseQty(item.id);
                }}
                leftSection={<IconPlus size={12} />}
              />
              <div className={styled["product-cart__quality--number"]}>
                {item.quantity}
              </div>
              <Button
                style={{ width: "2.4rem" }}
                className="button-minus"
                radius={"sm"}
                onClick={() => {
                  decreaseQty(item.id);
                }}
                leftSection={
                  <IconMinus style={{ width: rem(12), height: rem(12) }} />
                }
              />
            </div>
            <MantineProvider>
              <ModalsProvider>
                <img
                  onClick={() => {
                    openDeleteModal(item);
                  }}
                  src="/img/delete.png"
                  alt=""
                  className={styled["product-cart__delete"]}
                />
              </ModalsProvider>
            </MantineProvider>
            <Divider style={{ gridColumn: "1/-1" }}></Divider>
          </div>
        );
      })}
    </>
  );
}

export default ProductCarts;
