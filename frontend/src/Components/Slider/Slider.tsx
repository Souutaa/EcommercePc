import { RangeSlider } from "@mantine/core";

function Slider() {
  function valueLabelFormat(value: number) {
    let scaledValue = value;
    let stringValue = scaledValue.toLocaleString("vi-VN");

    return `${stringValue}  ${"VND"}`;
  }
  return (
    <>
      <RangeSlider
        mt={50}
        step={500000}
        min={500000}
        max={50000000}
        labelAlwaysOn
        defaultValue={[500000, 50000000]}
        label={valueLabelFormat}
      />
    </>
  );
}

export default Slider;
