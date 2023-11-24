import React from "react";
import { Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconCheck, IconTrash } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
const ButtonDelete = () => {
  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: "Delete ",
      centered: true,
      children: <Text size="sm">Do you want to delete ?</Text>,
      labels: { confirm: "Delete ", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
    });

  return <IconTrash onClick={openDeleteModal} />;
};

export default ButtonDelete;
