import { Link } from "react-router-dom";
import { PATHS } from "../../../Constants/path";
import formatPrice from "../../../Helper/formatPrice";
import { ProductItems } from "../../../Pages/HomePage/Content";
import ButtonAdd from "../../Button/button-add-to-cart";
import styled from ".//Product.module.css";
import APT_ADDRESS from "../../../Api_Address";
export type ProductItem = {
  id: number;
  name?: string;
  productName: string;
  productLine: string;
  discount: number;
  price: number;
  thumbnailUri: string;
  stock: number;
};

function Product(props: { products: ProductItems[] }) {
  const products = props.products;
  return (
    <div className={`grid-4-col ${styled["products__container"]}`}>
      {products.map((e) => {
        if (e.stock === 0) return <></>;
        return (
          <div className={styled["product-item"]}>
            <Link
              to={{
                pathname: PATHS.PRODUCT + `/${e.productLine}`,
              }}
            >
              <div className={styled["product-img"]}>
                <img
                  src={`http://${APT_ADDRESS}:8080/product/get-file?filePath=${e.thumbnailUri}`}
                  alt={e.productName}
                  className="img"
                />
              </div>
            </Link>
            <div className={styled["product-info"]}>
              <h4 className={styled["product-name"]}>{e.productName}</h4>
              <div className={styled["product-detail"]}>
                <span className={styled["product-price"]}>
                  {formatPrice(e.price)}
                </span>
                <ButtonAdd
                  id={e.id}
                  price={e.price}
                  discount={e.discount}
                  productLine={e.productLine}
                  productName={e.productName}
                  thumbnailUri={e.thumbnailUri}
                  stock={e.stock}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
