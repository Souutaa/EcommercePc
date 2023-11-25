import { Button, MantineProvider } from "@mantine/core";
import { ModalsProvider, modals } from "@mantine/modals";
import React from "react";
import { Notifications } from "@mantine/notifications";
import FormCategory from "../FormCategory/FormCategory";

const ButtonAddCategory = () => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <Notifications />
        <Button
          onClick={() => {
            modals.open({
              size: "xl",
              title: "Add New Category",
              children: (
                <>
                  <FormCategory />
                </>
              ),
            });
          }}
        >
          Add category
        </Button>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default ButtonAddCategory;
