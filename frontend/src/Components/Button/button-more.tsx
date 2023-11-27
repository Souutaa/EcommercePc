import Btn from "../../Components/Button";
import { Link } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import { Brand } from "../../Pages/HomePage/Content";
import { Button } from "@mantine/core";
import ProductMore from "../../Pages/ProductMore/ProductMore";
import { ProductItem } from "../Product";
import { useEffect, useState } from "react";
function ButtonMore(props: { brandName?: string; categoryName: string }) {
  const url = props.brandName
    ? PATHS.MORE + `/${props.categoryName}/${props.brandName}`
    : PATHS.MORE + `/${props.categoryName}`;
  return (
    <>
      <Link to={url}>
        <Btn
          maintine="a"
          customStyle={{ margin: "16px 0", color: "black" }}
          color="#E5E7EB"
          type="button"
        >
          Xem thêm
        </Btn>
      </Link>
    </>
  );
}

export default ButtonMore;
