import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import ButtonAddToCart from "../../Components/Button/ButtonAddToCart";
import { ProductItem } from "../../Components/Product/Product";
import ProductColor from "../../Components/Product/ProductColor/ProductColor";
import ProductInfo from "../../Components/Product/ProductInfo/ProductInfo";
import ProductListDetail from "../../Components/Product/ProductListDetail";
import { ProductItems } from "../HomePage/Content";
import { Button } from "@mantine/core";
import API_ADDRESS from "../../Api_Address";
import styled from ".//ProductDetail.module.css";

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
  warrantyPeriod: number;
  categoryName: string;
  brandName: string;
  stock: number;
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
          `http://${API_ADDRESS}:8080/product/${
            location.pathname.split("/")[3]
          }`
        );
        const data = res.data;
        console.log("dấd", data);

        try {
          const brandRes = await axios.get(
            `http://${API_ADDRESS}:8080/brand/getByIdOfBrand?id=${data.brandId}`
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
        style={{
          width: "12rem",
          height: "100%",
          cursor: "pointer",
          objectFit: "cover",
          borderRadius: ".8rem",
          boxShadow: "var(--box-shadow--1)",
        }}
        alt=""
        src={`http://${API_ADDRESS}:8080/product/get-file?filePath=${url}`}
      />
    </Carousel.Slide>
  ));

  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <div className={styled["product-details"]}>
          {/* ... (existing code) */}
          <div className={styled["product-detail-left"]}>
            <div className={styled["product-detail-main"]}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                  borderRadius: "1.2rem",
                }}
                src={`http://${API_ADDRESS}:8080/product/get-file?filePath=${
                  selectedImage || productDetail?.thumbnailUri
                }`}
                alt=""
              />
            </div>
            <div className={styled["product-detail-carousel"]}>
              <Carousel
                slideSize="33,33%"
                height={"12rem"}
                align="start"
                slideGap="xl"
                controlSize={42}
                controlsOffset="lg"
              >
                {slides}
              </Carousel>
            </div>
          </div>
          <div className={styled["product-detail-right"]}>
            {productDetail?.product.id && (
              <ProductInfo
                brandId={productDetail?.brandId}
                categoryId={productDetail?.categoryId}
                imageUris={productDetail?.imageUris}
                product={productDetail?.product}
                productInfos={productDetail?.productInfos}
                thumbnailUri={productDetail?.thumbnailUri}
                warrantyPeriodId={productDetail?.warrantyPeriodId}
                brandName={productDetail?.brandName}
                categoryName={productDetail?.categoryName}
                warrantyPeriod={productDetail?.warrantyPeriod}
                stock={productDetail?.stock}
              />
            )}
            {productDetail?.product.id && (
              <ProductColor
                product={productDetail?.product}
                warrantyPeriod={productDetail.warrantyPeriod}
              />
            )}
            {productDetail?.product.id && (
              <div className="full-width">
                {productDetail.stock === 0 ? (
                  <Button disabled>Hết hàng</Button>
                ) : (
                  <ButtonAddToCart
                    discount={productDetail?.product.discount}
                    id={productDetail?.product.id}
                    price={productDetail?.product.price}
                    productLine={productDetail?.product.productLine}
                    productName={productDetail?.product.productName}
                    thumbnailUri={productDetail?.thumbnailUri}
                    stock={productDetail?.stock}
                  />
                )}
              </div>
            )}
          </div>
        </div>
        <div className="product-more">
          <div className="product-more-text">Các sản phẩm khác của Acer</div>
          {productsOfBrand?.products && (
            <ProductListDetail
              products={productsOfBrand?.products}
              name={productsOfBrand.brandName}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
