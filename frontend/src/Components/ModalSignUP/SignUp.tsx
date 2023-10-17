import { Carousel } from "@mantine/carousel";
import { Button } from "@mantine/core";
import "@mantine/carousel/styles.css";
import { url } from "inspector";
function SignUP() {
  const images = ["./Carousel1.png", "./Carousel1.png", "./Carousel1.png"];
  const slides = images.map((url) => {
    return (
      <Carousel.Slide key={url}>
        <img src={url} />
      </Carousel.Slide>
    );
  });
  return (
    <>
      <div className="modal">
        <div className="modal-carousel">
          <Carousel withIndicators>{slides}</Carousel>
        </div>
        <div className="modal-login">
          <h2>Đăng Nhập</h2>

          <form action="">
            <div className="form-group">
              <label className="form-text" htmlFor="">
                Tai Khoan
              </label>
              <br></br>
              <input className="form-input" type="text" />
            </div>
            <div className="form-group">
              <label className="form-text" htmlFor="">
                Mat Khau
              </label>
              <br></br>
              <input className="form-input" type="password" />
            </div>
            <div className="form-group">
              <Button>Dang nhap</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUP;
