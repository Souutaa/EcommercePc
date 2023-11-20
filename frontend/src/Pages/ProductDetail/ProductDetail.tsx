import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

import ProductColor from "../../Components/Product/ProductColor";
import ProductInfo from "../../Components/Product/ProductInfo";

import { useLocation } from "react-router-dom";
import { ProductItem } from "../../Components/Product";
import { ProductItems } from "../HomePage/Content";
import ProductList from "../../Components/Product/ProductList";
import ButtonAdd from "../../Components/Button/button-add-to-cart";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

type ProductInfo = {
  id: number;
  productInformation: string;
};

type ProductInfo = {
  id: number;
  productInformation: string;
};

type ProductDetail = {
  brandId: number;
  categoryId: number;
  imageUris: string[];
  product: ProductItem;
  productInfos: ProductInfo[];
  thumbnailUri: string;
  warrantyPeriodId: number;
};

type Brand = {
  id: number;
  brandName: string;
  products: ProductItems[] | null;
};

function ProductDetail() {
  const location = useLocation();

  const [productDetail, setProductDetail] = useState<ProductDetail>();
  const [productsOfBrand, setProductsOfDetail] = useState<Brand>();
  useEffect(() => {
    //Get pathParam
    const getPath = location.pathname.split("/");
    const pathParam = getPath[3];
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8080/product/${pathParam}`
        );
        console.log("productDetail=> ", res);
        const data = await res.data;
        try {
          const res = await axios.get(
            `http://127.0.0.1:8080/brand/getByIdOfBrand?id=${data.brandId}`
          );
          console.log("productsBrand=> ", res);
          setProductDetail(data);
          setProductsOfDetail(res.data);
        } catch (error) {
          console.log("error=> ", error);
        }
      } catch (error) {
        console.log("error=> ", error);
      }
    };

    fetchProducts();
    console.log("get brand have products data from api");
    const fetchProductsOfBrand = async () => {};
    fetchProductsOfBrand();
  }, [location]);

  const slides = productDetail?.imageUris.map((url, index) => {
    return (
      <Carousel.Slide key={index}>
        <img
          alt=""
          src={`http://127.0.0.1:8080/product/get-file?filePath=${url}`}
        />
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
              <img
                src={`http://127.0.0.1:8080/product/get-file?filePath=${productDetail?.thumbnailUri}`}
                alt=""
              />
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
            {productDetail?.product.id && (
              <ProductInfo
                brandId={productDetail?.brandId}
                categoryId={productDetail?.categoryId}
                imageUris={productDetail?.imageUris}
                product={productDetail?.product}
                productInfos={productDetail?.productInfos}
                thumbnailUri={productDetail?.thumbnailUri}
                warrantyPeriodId={productDetail?.warrantyPeriodId}
              />
            )}
            <ProductColor />
            {/* <Btn customStyle={{ width: "100%" }} maintine="a"> */}
            {productDetail?.product.id && (
              <ButtonAdd
                discount={productDetail?.product.discount}
                id={productDetail?.product.id}
                price={productDetail?.product.price}
                productLine={productDetail?.product.productLine}
                productName={productDetail?.product.productName}
                thumbnailUri={productDetail?.thumbnailUri}
              />
            )}
            {/* </Btn> */}
          </div>
        </div>
        <div className="product-more">
          <div className="product-more-text">Các sản phẩm khác của Acer</div>
          {productsOfBrand?.products && (
            <ProductList products={productsOfBrand?.products} />
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
