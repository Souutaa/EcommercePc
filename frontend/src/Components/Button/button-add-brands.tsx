import { Button, MantineProvider } from "@mantine/core";
import { ModalsProvider, modals } from "@mantine/modals";
import React from "react";
import FormBrands from "../FormBrands/FormBrands";
import { Notifications } from "@mantine/notifications";

const ButtonAddBrands = () => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <Notifications />
        <Button
          onClick={() => {
            modals.open({
              size: "xl",
              title: "Add New Brand",
              children: (
                <>
                  <FormBrands />
                </>
              ),
            });
          }}
        >
          Add brands
        </Button>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default ButtonAddBrands;
