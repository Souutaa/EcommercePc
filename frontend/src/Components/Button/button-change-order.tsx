import { modals } from "@mantine/modals";
import { IconPencil } from "@tabler/icons-react";
import React from "react";
import FromChangeOrder from "../FromChangeOrder/FromChangeOrder";

const ButtonChangeOrder = (props: {orderId: number}) => {
  return (
    <IconPencil
      onClick={() => {
        modals.open({
          size: "xl",
          title: `Các sản phẩm từ hóa đơn # ${props.orderId}`,
          children: (
            <>
              <FromChangeOrder orderId={props.orderId}/>
            </>
          ),
        });
      }}
      style={{ marginRight: "5px" }}
    />
  );
};

export default ButtonChangeOrder;
