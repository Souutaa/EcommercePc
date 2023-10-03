import { AppShell, Skeleton } from "@mantine/core";
import React from "react";

const Navbar = () => {
  <AppShell.Navbar p="md">
    Navbar
    {Array(15)
      .fill(0)
      .map((_, index) => (
        <Skeleton key={index} h={28} mt="sm" animate={false} />
      ))}
  </AppShell.Navbar>;
};

export default Navbar;
