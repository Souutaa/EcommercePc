import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import Product from "../../Components/Product";
import "./style.css";
import TabProduct from "../../Components/TabProduct/TabProduct";
import ButtonMore from "../../Components/Button/button-more";
import ProductList from "../../Components/Product/ProductList";

function Content() {
  return (
    <>
      <div className="container">
        <div className="products">
          <TabProduct />
          <div className="title">Macbook</div>
          <ProductList />
          <ButtonMore />
          <div className="title">Acer</div>
          <ProductList />
          <ButtonMore />
          <div className="title">Asus</div>
          <ProductList />
          <ButtonMore />
          <div className="title">MSI</div>
          <ProductList />
          <ButtonMore />
        </div>
      </div>
    </>
  );
}
export default Content;
