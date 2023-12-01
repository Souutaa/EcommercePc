import { Button, rem } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import {
  IconCalendar,
  IconDownload,
  IconMenu
} from "@tabler/icons-react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import AreaCharts from "../Components/Chart/AreaChart";
import Cell from "../Components/Chart/Cell";
import ProductSelling from "../Components/ProductSelling/ProductSelling";
import Seaparator from "../Components/Seaparator/Seaparator";

export interface TopProduct {
  createdAt: string;
  productLine: string;
  productName: string;
  totalSold: number;
  price: number;
  id: number;
}

const Dashborad = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [topProducts, setTopProducts] = useState<TopProduct[]>([]);
  const icon = (
    <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );

  const handleExportExcel = async () => {
    axios
      .get("http://127.0.0.1:8080/order/export/excel", {
        responseType: "blob",
      })
      .then((response) => {
        const href = URL.createObjectURL(response.data);
        // create "a" HTML element with href to file & click
        const link = document.createElement("a");
        link.href = href;
        link.setAttribute("download", "day_report.xlsx"); //or any other extension
        document.body.appendChild(link);
        link.click();
        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      });
  };

  const fetchTopProduct = useCallback(async () => {
    const response = await axios.get(
      "http://127.0.0.1:8080/product/getTopSelling"
    );
    setTopProducts(response.data);
  }, []);

  useEffect(() => {
    fetchTopProduct();
  }, [fetchTopProduct]);

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
          <Button onClick={handleExportExcel}>
            <IconDownload />
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
          {topProducts.map((product) => (
            <div key={product.id}>
              <ProductSelling product={product} />
              <Seaparator />
            </div>
          ))}
        </div>
        <div className="order-total">
          <h4 className="text-title">Total Orders</h4>
          <Cell date={value} />
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
