import {
  AppShell,
  Group,
  Grid,
  Burger,
  TextInput,
  Button,
} from "@mantine/core";
import { IconSearch, IconUser, IconUserPlus } from "@tabler/icons-react";
import React from "react";

const Header = () => {
  <AppShell.Header>
    <Group grow justify="space-between" gap="xl" h="100%" px="md">
      <Grid gutter={{ base: 10, xs: "md", md: "xl", xl: 150 }} columns={24}>
        <Grid.Col span={2}>
          <Burger
            //opened={mobileOpened}
            //onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            //opened={desktopOpened}
            //onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
        </Grid.Col>

        <Grid.Col span={16}>
          <TextInput
            size="sm"
            leftSection={<IconSearch />}
            radius="md"
            placeholder="Search"
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <Group wrap="nowrap">
            <Button
              leftSection={<IconUser size={14} />}
              variant="default"
              fullWidth
            >
              Đăng nhập
            </Button>

            <Button leftSection={<IconUserPlus size={14} />} fullWidth>
              Đăng kí
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Group>
  </AppShell.Header>;
};

export default Header;
