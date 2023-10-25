import Navbar from "../../Layouts/NavBar";
import { Button, Group, ColorSwatch } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { start } from "repl";
import ProductList from "../../Components/Product/ProductList";

function ProductDetail() {
  const images = [
    "/img/Img.png",
    "/img/Img(1).png",
    "/img/Img(2).png",
    "/img/Img(3).png",
    "/img/Img.png",
    "/img/Img(1).png",
  ];
  const slides = images.map((url, index) => {
    return (
      <Carousel.Slide key={index}>
        <img src={url} />
      </Carousel.Slide>
    );
  });
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="product-details">
          <div className="product-detail-left">
            <div className="product-detail-main">
              <img src="/img/Main.png" alt="" />
            </div>
            <div className="product-detail-carousel">
              <Carousel
                slideSize="33,33%"
                height={120}
                align="start"
                slideGap="sm"
                controlSize={25}
              >
                {slides}
              </Carousel>
            </div>
          </div>
          <div className="product-detail-right">
            <div className="product-detail-info">
              <h1 className="product-detail-text">
                Laptop Gaming Acer Nitro 5 Eagle AN515-57-54MV
              </h1>
              <div className="product-detail-features">
                <div className="product-detail-feature">
                  <img
                    className=" product-detail-feature-icon"
                    src="/img/badge-check.png"
                    alt=""
                  />
                  <span className="product-detail-feature-text">
                    Thiết kế đậm chất gaming cứng cáp, hầm hố và có độ hoàn
                    thiện cao
                  </span>
                </div>
                <div className="product-detail-feature">
                  <img
                    className=" product-detail-feature-icon"
                    src="/img/badge-check.png"
                    alt=""
                  />
                  <span className="product-detail-feature-text">
                    Màn hình FullHD kích thước chuẩn 15,6 inch, hiển thị sắc
                    nét, màu sắc sống động
                  </span>
                </div>
                <div className="product-detail-feature">
                  <img
                    className=" product-detail-feature-icon"
                    src="/img/badge-check.png"
                    alt=""
                  />
                  <span className="product-detail-feature-text">
                    Hiệu năng mạnh mẽ, đa nhiệm mượt mà - Intel Core i5-11400H,
                    RAM 8GB
                  </span>
                </div>
                <div className="product-detail-feature">
                  <img
                    className="product-detail-feature-icon"
                    src="/img/badge-check.png"
                    alt=""
                  />
                  <span className="product-detail-feature-text">
                    Năng lượng bất tận cả ngày với viên pin 4-cell, 57.5 Wh
                  </span>
                </div>
              </div>
            </div>
            <div className="product-detail-attribute">
              <div className="product-detail-color">
                <div className="product-detail-title">
                  <span className="product-detail-textcolor">Màu sắc:</span>
                  <span className="product-detail-text-black"> Đen</span>
                </div>
                <div className="product-detail-color-value">
                  <Group>
                    <ColorSwatch
                      className="border-color-active"
                      color="#111928"
                    />
                    <ColorSwatch className="border-color" color="#fff" />
                    <ColorSwatch className="border-color" color="#6B7280" />
                  </Group>
                </div>
              </div>
              <div className="product-detail-price">
                <span className="product-detail-price-new">₫20.990.000</span>
                <span className="product-detail-price-old">₫26.490.000</span>
              </div>
              <Button style={{ width: "100%" }}>Thêm vào giỏ</Button>
            </div>
          </div>
        </div>
        <div className="product-more">
          <div className="product-more-text">Các sản phẩm khác của Acer</div>
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
