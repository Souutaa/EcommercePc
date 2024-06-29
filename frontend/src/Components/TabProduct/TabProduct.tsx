import { SegmentedControl, SegmentedControlItem } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "../../Pages/HomePage/Content";
import ProductListNoButtonMore from "../Product/ProductListNoButtonMore";
import styled from ".//TabProduct.module.css";
import API_ADDRESS from "../../Api_Address";
function TabProduct({ onChange }: any) {
  const [filteredCategory, setFilteredCategory] = useState<Category[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `http://${API_ADDRESS}:8080/category/allOfCategoryBrand`
        );
        setFilteredCategory(res.data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };
    fetchProducts();
  }, []);

  const dataFilterDefault = [{ label: "ALL", value: "ALL" }];
  const dataFilter = filteredCategory.map((e): SegmentedControlItem => {
    return {
      value: e.name,
      label: e.name,
    };
  });

  const [currentFilter, setCurrentFilter] = useState("ALL");

  const onChangeFilter = (index: string) => {
    setCurrentFilter(index);
  };

  return (
    <>
      <SegmentedControl
        style={{
          textDecoration: "none",
          fontSize: "3.2rem",
        }}
        className={styled["segment-control"]}
        color="#1c64f2"
        size="md"
        radius="lg"
        defaultValue="ALL"
        data={[...dataFilterDefault, ...dataFilter]}
        onChange={(e) => {
          onChangeFilter(e);
          onChange(e);
        }}
      />

      {filteredCategory.map((e) => {
        if (e.name === currentFilter)
          return (
            <div key={e.id}>
              <ProductListNoButtonMore
                brands={e.brands}
                category={currentFilter}
              />
            </div>
          );
      })}
    </>
  );
}

export default TabProduct;
