import React, { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import ProductInfo from "../../Components/Product/ProductInfo";
import ProductListDetail from "../../Components/Product/ProductListDetail";
import { Button } from "@mantine/core";
import { ProductItem } from "../../Components/Product";
import { ProductItems } from "../HomePage/Content";
import ProductList from "../../Components/Product/ProductList";
import ProductColor from "../../Components/Product/ProductColor";
import ButtonAdd from "../../Components/Button/button-add-to-cart";

export type ProductInfoType = {
  id: number;
  productInformation: string;
};

export type ProductDetailType = {
  brandId: number;
  categoryId: number;
  imageUris: string[];
  product: ProductItem;
  productInfos: ProductInfoType[];
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

  const [productDetail, setProductDetail] = useState<
    ProductDetailType | undefined
  >(undefined);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [productsOfBrand, setProductsOfDetail] = useState<Brand | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8080/product/${location.pathname.split("/")[3]}`
        );
        const data = res.data;

        try {
          const brandRes = await axios.get(
            `http://127.0.0.1:8080/brand/getByIdOfBrand?id=${data.brandId}`
          );
          setProductDetail(data);
          setProductsOfDetail(brandRes.data);
        } catch (error) {
          console.log("error in fetching brand data => ", error);
        }
      } catch (error) {
        console.log("error in fetching product data => ", error);
      }
    };

    fetchData();
  }, [location]);

  const handleThumbnailClick = (imageUri: string) => {
    setSelectedImage(imageUri);
  };

  const slides = productDetail?.imageUris.map((url, index) => (
    <Carousel.Slide key={index} onClick={() => handleThumbnailClick(url)}>
      <img
        style={{ width: "120px", height: "120px", cursor: "pointer" }}
        alt=""
        src={`http://127.0.0.1:8080/product/get-file?filePath=${url}`}
      />
    </Carousel.Slide>
  ));

  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <div className="product-details">
          {/* ... (existing code) */}
          <div className="product-detail-left">
            <div className="product-detail-main">
              <img
                style={{ width: "100%", height: "670px" }}
                src={`http://127.0.0.1:8080/product/get-file?filePath=${
                  selectedImage || productDetail?.thumbnailUri
                }`}
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
              <div className="full-width">
                <ButtonAdd
                  discount={productDetail?.product.discount}
                  id={productDetail?.product.id}
                  price={productDetail?.product.price}
                  productLine={productDetail?.product.productLine}
                  productName={productDetail?.product.productName}
                  thumbnailUri={productDetail?.thumbnailUri}
                />
              </div>
            )}
            {/* </Btn> */}
          </div>
        </div>
        <div className="product-more">
          <div className="product-more-text">Các sản phẩm khác của Acer</div>
          {productsOfBrand?.products && (
            <ProductListDetail products={productsOfBrand?.products} />
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
