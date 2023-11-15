import { SegmentedControl } from "@mantine/core";

function TabProduct() {
  return (
    <SegmentedControl
      style={{ background: "#FFF", marginTop: "20px" }}
      fullWidth
      color="blue"
      size="lg"
      radius="md"
      data={["Tất cả", "Văn phòng", "Gaming ", "Đồ họa kỹ thuật", "Cảm ứng"]}
    />
  );
}

export default TabProduct;
