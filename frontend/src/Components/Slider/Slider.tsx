import { RangeSlider } from "@mantine/core";
import formatPrice from "../../Helper/formatPrice";
import { useState } from "react";

function Slider({ onChangFilter }: any) {
  const [valueStart, setValueStart] = useState(100000);
  const [valueEnd, setValueEnd] = useState(500000000);
  return (
    <>
      <RangeSlider
        mt={50}
        step={500000}
        min={valueStart}
        max={valueEnd}
        labelAlwaysOn
        defaultValue={[valueStart, valueEnd]}
        label={onChangFilter}
      />
    </>
  );
}

export default Slider;
