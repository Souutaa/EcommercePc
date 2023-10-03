import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Button,
  Grid,
  GridCol,
  Group,
  Skeleton,
  TextInput,
} from "@mantine/core";
import {
  IconArrowRight,
  IconDownload,
  IconPhoto,
  IconRegistered,
  IconSearch,
  IconUser,
  IconUserPlus,
} from "@tabler/icons-react";

const Demo = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group grow justify="space-between" gap="xl" h="100%" px="md">
          <Grid gutter={{ base: 10, xs: "md", md: "xl", xl: 150 }} columns={24}>
            <Grid.Col span={2}>
              <Burger
                opened={mobileOpened}
                onClick={toggleMobile}
                hiddenFrom="sm"
                size="sm"
              />
              <Burger
                opened={desktopOpened}
                onClick={toggleDesktop}
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
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        Main
        <AppShell.Footer p="md">Footer</AppShell.Footer>
      </AppShell.Main>
    </AppShell>
  );
};
export default Demo;
