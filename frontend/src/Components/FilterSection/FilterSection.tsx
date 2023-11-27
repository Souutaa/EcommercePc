import { Checkbox, Select } from "@mantine/core";
import Slider from "../Slider/Slider";
import { useState } from "react";

function FilterSection({ onChange }: any) {
  return (
    <>
      <div className="filter-section">
        <div className="filter-product">
          <div className="filter-price">
            <Slider />
          </div>
          <div className="filter-options">
            <label className="filter-text" htmlFor="">
              Filter:
            </label>
            <div className="filter-select">
              <Select
                searchValue="Sản phẩm nổi bật"
                placeholder="Chọn giá trị bạn muốn loc"
                data={[
                  {
                    label: "Sản phẩm nổi bật",
                    value: "1",
                  },
                  {
                    label: "Giá: Tăng dần",
                    value: "2",
                  },
                  {
                    label: "Giá: Giảm dần",
                    value: "3",
                  },
                  {
                    label: "Tên: A-Z",
                    value: "4",
                  },
                  {
                    label: "Tên: Z-A",
                    value: "5",
                  },
                ]}
                defaultValue={"Sản phẩm nổi bật"}
                onChange={(e) => {
                  onChange(e);
                  console.log(e);
                }}
              />
            </div>
          </div>
        </div>
        <div className="filter-selection">
          <h4 className="filter-selection-text">Giá:</h4>
          <div className="filter-checkbox">
            <Checkbox className="m10" label="100.000đ - 500.000đ" />
            <Checkbox className="m10" label="500.000đ - 2.000.000đ" />
            <Checkbox className="m10" label="2.000.000đ - 10.000.000đ" />
            <Checkbox className="m10" label="10.000.000đ - 20.000.000đ" />
            <Checkbox className="m10" label="20.000.000đ - 50.000.000đ" />
            <Checkbox className="m10" label="50.000.000đ - 75.000.000đ" />
            <Checkbox className="m10" label="75.000.000đ - 100.000.000đ" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSection;
