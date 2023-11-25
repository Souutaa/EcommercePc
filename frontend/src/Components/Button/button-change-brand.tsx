import { modals } from "@mantine/modals";
import { IconPencil } from "@tabler/icons-react";
import React from "react";
import FormChangeBrand from "../FormChangeBrand/FormChangeBrand";

const ButtonChangeBrand = () => {
  return (
    <IconPencil
      onClick={() => {
        modals.open({
          size: "xl",
          title: "Change Brand's information",
          children: (
            <>
              <FormChangeBrand />
            </>
          ),
        });
      }}
      style={{ marginRight: "5px" }}
    />
  );
};

export default ButtonChangeBrand;
