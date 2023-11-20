import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import ProductList from "../../Components/Product/ProductList";
import ProductInfo from "../../Components/Product/ProductInfo";
import ProductColor from "../../Components/Product/ProductColor";
import Btn from "../../Components/Button";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumb";

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
      <div className="container">
        <Breadcrumbs />
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
            <ProductInfo />
            <ProductColor />
            <Btn customStyle={{ width: "100%" }} maintine="a">
              Thêm vào giỏ
            </Btn>
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
