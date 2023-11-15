import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "./style.css";

function BannerSection() {
  const images = [
    "/img/Carousel.jpg",
    "/img/Carousel.jpg",
    "/img/Carousel.jpg",
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
        <div className="banner">
          <div className="category">
            <div className="category-item">
              <img className="category-img" src="/img/laptop.png"></img>
              <span className="category-text">Máy tính sách tay</span>
            </div>
            <div className="category-item">
              <img className="category-img" src="/img/laptop.png"></img>
              <span className="category-text">Máy tính sách tay</span>
            </div>
            <div className="category-item">
              <img className="category-img" src="/img/laptop.png"></img>
              <span className="category-text">Máy tính sách tay</span>
            </div>
            <div className="category-item">
              <img className="category-img" src="/img/laptop.png"></img>
              <span className="category-text">Máy tính sách tay</span>
            </div>
            <div className="category-item">
              <img className="category-img" src="/img/laptop.png"></img>
              <span className="category-text">Máy tính sách tay</span>
            </div>
          </div>
          <div className="carousel">
            <Carousel withIndicators>{slides}</Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerSection;
