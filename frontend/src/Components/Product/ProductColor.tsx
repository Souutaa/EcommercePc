import { Group, ColorSwatch } from "@mantine/core";
import { useState } from "react";

function ProductColor() {
  let defautlcl = "";
  const [selectedColor, setselectedColor] = useState(defautlcl);
  let colors = ["#111928", "#fff", "#6B7280"];
  const handleChange = (color: string) => {
    setselectedColor(color);
  };
  return (
    <>
      <div className="product-detail-attribute">
        <div className="product-detail-color">
          <div className="product-detail-title">
            <span className="product-detail-textcolor">Màu sắc:</span>
            <span className="product-detail-text-black"> Đen</span>
          </div>
          <div className="product-detail-color-value">
            <Group>
              {colors.map((color, index) => {
                return (
                  <ColorSwatch
                    key={index}
                    onClick={() => handleChange(color)}
                    className={`border-color ${
                      selectedColor === color ? "border-color-active" : ""
                    }`}
                    color={color}
                  />
                );
              })}
            </Group>
          </div>
        </div>
        <div className="product-detail-price">
          <span className="product-detail-price-new">₫20.990.000</span>
          <span className="product-detail-price-old">₫26.490.000</span>
        </div>
      </div>
    </>
  );
}

export default ProductColor;
