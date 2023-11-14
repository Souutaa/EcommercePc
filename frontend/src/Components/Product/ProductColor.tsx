import { Group, ColorSwatch } from "@mantine/core";

function ProductColor() {
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
              <ColorSwatch className="border-color-active" color="#111928" />
              <ColorSwatch className="border-color" color="#fff" />
              <ColorSwatch className="border-color" color="#6B7280" />
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
