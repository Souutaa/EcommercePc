import { modals } from "@mantine/modals";
import { IconPencil } from "@tabler/icons-react";
import React from "react";
import FromChangeOrder from "../FromChangeOrder/FromChangeOrder";

const ButtonChangeOrder = () => {
  return (
    <IconPencil
      onClick={() => {
        modals.open({
          size: "xl",
          title: "Các sản phẩm từ hóa đơn # 18",
          children: (
            <>
              <FromChangeOrder />
            </>
          ),
        });
      }}
      style={{ marginRight: "5px" }}
    />
  );
};

export default ButtonChangeOrder;
