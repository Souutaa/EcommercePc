import { SegmentedControl, SegmentedControlItem } from "@mantine/core";
import { Category, ProductItems } from "../../Pages/HomePage/Content";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductList from "../Product/ProductList";
import ProductListNoButtonMore from "../Product/ProductListNoButtonMore";

function TabProduct({ onChange }: any) {
  const [filteredCategory, setFilteredCategory] = useState<Category[]>([]);
  useEffect(() => {
    console.log("get category data from api");
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/category/allOfCategory"
        );
        console.log("products category=> ", res);
        setFilteredCategory(res.data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };
    fetchProducts();
  }, []);

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
        style={{ background: "#FFF", marginTop: "20px" }}
        fullWidth
        color="blue"
        size="lg"
        radius="md"
        defaultValue={currentFilter}
        data={dataFilter}
        onChange={(e) => {
          onChangeFilter(e);
          onChange(e);
        }}
      />

      {filteredCategory.map((e) => {
        if (e.name == currentFilter)
          return <ProductListNoButtonMore products={e.products} />;
        //if (e.name == "ALL") return null;
      })}
    </>
  );
}

export default TabProduct;
