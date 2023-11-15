import { Link } from "react-router-dom";
import Btn from "../Button";
import { PATHS } from "../../Constants/path";

function ProductSearchs() {
  return (
    <>
      <div className="productsearch-card">
        <div className="productsearch-img">
          <img src="/img/Img(4).png" alt="" />
        </div>
        <div className="productsearch-content">
          <span className="productsearch-text">
            Laptop Gaming Nitro 5 Eagle AN515-57-53F9
          </span>
          <div className="productsearch-info">
            <span className="productsearch-price">₫20.990.000</span>
            <Link to={PATHS.PRODUCT}>
              <Btn maintine="a">Xem sản phẩm</Btn>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSearchs;
