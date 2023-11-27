import { modals } from "@mantine/modals";
import { IconPencil } from "@tabler/icons-react";
import React from "react";
import FormChangeUser from "../FormChangeUser/FormChangeUser";

const ButtonChangeUser = () => {
  return (
    <IconPencil
      onClick={() => {
        modals.open({
          size: "xl",
          title: "Change testuser5's information",
          children: (
            <>
              <FormChangeUser />
            </>
          ),
        });
      }}
      style={{ marginRight: "5px" }}
    />
  );
};

export default ButtonChangeUser;
