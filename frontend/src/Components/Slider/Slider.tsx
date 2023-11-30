import { RangeSlider } from "@mantine/core";
import formatPrice from "../../Helper/formatPrice";
import { useState } from "react";

function Slider({ onChange }: any) {
  return (
    <>
      <RangeSlider
        mt={50}
        step={500000}
        min={100000}
        max={100000000}
        labelAlwaysOn
        defaultValue={[100000, 100000000]}
        label={onChange}
        onChange={
          onChange
          //onChangeNumberOfPage(e);
        }
      />
    </>
  );
}

export default Slider;
