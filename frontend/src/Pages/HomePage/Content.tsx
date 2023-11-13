import "./style.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import Product from "../../Components/Product";
import Btn from "../../Components/Button";
import { PATHS } from "../../Contants/path";
import { Link } from "react-router-dom";
import TabProduct from "../../Components/TabProduct/TabProduct";

function Content() {
  return (
    <>
      <div className="container">
        <div className="products">
          <TabProduct />
          <div className="title">Macbook</div>
          <div className="product-list">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <Link to={PATHS.MORE}>
            <Btn
              maintine="a"
              customStyle={{ margin: "16px 0" }}
              color="#E5E7EB"
            >
              Xem thêm
            </Btn>
          </Link>
          <div className="title">Acer</div>
          <div className="product-list">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <Link to={PATHS.MORE}>
            <Btn
              maintine="a"
              customStyle={{ margin: "16px 0" }}
              color="#E5E7EB"
            >
              Xem thêm
            </Btn>
          </Link>
          <div className="title">Asus</div>
          <div className="product-list">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <Link to={PATHS.MORE}>
            <Btn
              maintine="a"
              customStyle={{ margin: "16px 0" }}
              color="#E5E7EB"
            >
              Xem thêm
            </Btn>
          </Link>
          <div className="title">MSI</div>
          <div className="product-list">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <Link to={PATHS.MORE}>
            <Btn
              maintine="a"
              customStyle={{ margin: "16px 0" }}
              color="#E5E7EB"
            >
              Xem thêm
            </Btn>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Content;
