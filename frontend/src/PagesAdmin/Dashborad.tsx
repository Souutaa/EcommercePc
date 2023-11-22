import { useState } from "react";
import { Button, rem } from "@mantine/core";
import { IconCalendar, IconMenu, IconReload } from "@tabler/icons-react";
import { DatePickerInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import React from "react";
import Cell from "../Components/Chart/Cell";
import AreaCharts from "../Components/Chart/AreaChart";
import Seaparator from "../Components/Seaparator/Seaparator";
import ProductSelling from "../Components/ProductSelling/ProductSelling";

const Dashborad = () => {
  const [value, setValue] = useState<Date | null>(null);
  const icon = (
    <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );

  return (
    <>
      <div className="page-title-box">
        <div className="page-title-right">
          <DatePickerInput
            style={{ width: "200px" }}
            leftSection={icon}
            leftSectionPointerEvents="none"
            placeholder="Pick date"
            value={value}
            onChange={setValue}
          />
          <Button>
            <IconReload />
          </Button>
          <Button>
            <IconMenu />
          </Button>
        </div>
        <h4 className="page-title">Dashboard</h4>
      </div>
      <div className="card">
        <div className="card-content">
          <h4 className="text-title">Top Selling Products</h4>
          <ProductSelling />
          <Seaparator />
          <ProductSelling />
          <Seaparator />
        </div>
        <div className="order-total">
          <h4 className="text-title">Total Orders</h4>
          <Cell />
        </div>
      </div>
      <div className="areachart">
        <h4 className="text-title">Revenue of month</h4>
        <AreaCharts />
      </div>
    </>
  );
};

export default Dashborad;
