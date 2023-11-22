import { notifications } from "@mantine/notifications";
import { Button, Text, rem } from "@mantine/core";
import { modals } from "@mantine/modals";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import Btn from "../Button";
import { CartItem, useShopingContext } from "../../Context/ShoppingContext";
import { ProductItem } from ".";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import formatPrice from "../../Helper/formatPrice";

function ProductCarts() {
  const {
    cartItems,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeCartItem,
    clearCart,
  } = useShopingContext();

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
        {
          console.log("Confirmed");
          removeCartItem(item.id);
        }
      },
    });
  };

  return (
    <>
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="productcart-item">
            <div className="productcart-item-img">
              <img
                style={{ width: "94px", height: "94px" }}
                src={`http://127.0.0.1:8080/product/get-file?filePath=${item.thumbnailUri}`}
                alt=""
              />
            </div>
            <div className="productcart-info">
              <div className="productcart-name">{item.productName}</div>
              <span className="productcart-color">Màu sắc: Black</span>
              <span className="productcart-fix">Sửa</span>
            </div>
            <span className="productcart-price">{formatPrice(item.price)}</span>
            <div className="productcart">
              <Button
                style={{ width: "36px" }}
                className="button-plus"
                onClick={() => {
                  increaseQty(item.id);
                }}
                leftSection={
                  <IconPlus
                    style={{
                      width: rem(12),
                      height: rem(12),
                    }}
                  />
                }
              />
              <div className="productcart-quality">{item.quantity}</div>
              <Button
                style={{ width: "36px" }}
                className="button-minus"
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
                  className="productcart-delete"
                />
              </ModalsProvider>
            </MantineProvider>
          </div>
        );
      })}
    </>
  );
}

export default ProductCarts;
