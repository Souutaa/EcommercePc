import { Button } from "@mantine/core";
function Product() {
  return (
    <>
      <div className="product-item">
        <div className="product-img">
          <img src="/img/macbook1.png" alt="" className="img" />
        </div>
        <div className="product-info">
          <h4 className="product-name">MacBook Air M1 Chip</h4>
          <div className="product-detail">
            <span className="product-price">₫23.771.205</span>
            <Button className="product-add Button">Thêm vào giỏ</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
