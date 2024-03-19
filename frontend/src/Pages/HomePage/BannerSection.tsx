import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "./style.css";
import SideBar from "../../Components/SideBar/sidebar";

function BannerSection() {
  const images = [
    "/img/Carousel.jpg",
    "/img/Carousel.jpg",
    "/img/Carousel.jpg",
  ];
  const slides = images.map((url, index) => {
    return (
      <Carousel.Slide key={index}>
        <div style={{overflow: "hidden"}}>
          <img alt="" src={url} style={{width: "100%"}} />
        </div>
      </Carousel.Slide>
    );
  });
  return (
    <>
      <div className="container">
        <div className="banner">
          <SideBar></SideBar>
          <div className="carousel">
            <Carousel withIndicators>{slides}</Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerSection;
