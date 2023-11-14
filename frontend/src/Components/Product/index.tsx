import { Link } from "react-router-dom";
import Btn from "../Button";
import { PATHS } from "../../Contants/path";
import ButtonAdd from "../Button/button-add-to-cart";

function Product() {
  return (
    <>
      <div className="product-item">
        <Link to={PATHS.PRODUCT}>
          <div className="product-img">
            <img src="/img/macbook1.png" alt="" className="img" />
          </div>
        </Link>
        <div className="product-info">
          <h4 className="product-name">MacBook Air M1 Chip</h4>
          <div className="product-detail">
            <span className="product-price">₫23.771.205</span>
            <ButtonAdd />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
