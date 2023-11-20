import Navbar from "../../Layouts/NavBar";
import Product from "../../Components/Product";
import { Carousel } from "@mantine/carousel";
import ProductList from "../../Components/Product/ProductList";
import { Pagination } from "@mantine/core";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
function ProductMore() {
  const images = [
    "/img/Carousel2.png",
    "/img/Carousel2.png",
    "/img/Carousel2.png",
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
        <div className="carousel-product">
          <Carousel withIndicators>{slides}</Carousel>
        </div>
        <div className="product">
          <div className="title">Acer</div>
          {/* <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList /> */}
        </div>
        <div className="pagination">
          <Pagination total={10} />
        </div>
      </div>
    </>
  );
}

export default ProductMore;
