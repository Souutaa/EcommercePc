package com.app.ecommerce.models;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "product")
public class Product extends BaseEntity {

    @Id()
    @Column(name = "product_line", length = 50, nullable = false)
    private String productLine;

    @Column(name = "product_name", length = 150, nullable = false)
    private String productName;

    @Column(name = "thumbnail", length = 50, nullable = false)
    private String thumbnail;

    @Column(name = "price", length = 10, nullable = false)
    private int price;

    @Column(name = "discount", length = 3, nullable = false, columnDefinition = "integer default 0")
    private int discount;

    // @Column(name = "brand_id", length = 10, nullable = false)
    // private String brandId;

    // @Column(name = "category_id", length = 10, nullable = false)
    // private int categoryId;

    // Mapping -----------------------------------------------------------------
    // @OneToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name = "fk_BrandID", referencedColumnName = "BrandID")
    // private Brand BRAND;

    @ManyToOne(fetch = FetchType.LAZY)
    private Brand brand;

    @ManyToOne(fetch = FetchType.LAZY)
    private Category category;

    @OneToMany()
    private List<ProductImage> productImages;

    @OneToMany()
    private List<ProductInfo> productInfos;

    @OneToOne(optional=false, fetch=FetchType.LAZY)
    private WarrantyPeriod warrantyPeriod;

    // @OneToMany(cascade = CascadeType.ALL)
    // @JoinColumn(name = "fk_Category", referencedColumnName = "Category")
    // private List<Category> CATEGORY;

    // @OneToMany(cascade = CascadeType.ALL)
    // @JoinColumn(name = "fk_Product_Line", referencedColumnName = "Product_Line")
    // private List<productWarranty> PRODUCTWARRANTY;

    // @OneToMany(cascade = CascadeType.ALL)
    // @JoinColumn(name = "fk_Product_Line", referencedColumnName = "Product_Line")
    // private List<productInfo> PRODUCTINFO;

    // @OneToMany(cascade = CascadeType.ALL)
    // @JoinColumn(name = "fk_Product_Line", referencedColumnName = "Product_Line")
    // private List<productImage> PRODUCTIMAGE;

    // public List<productWarranty> getPRODUCTWARRANTY() {
    //     return PRODUCTWARRANTY;
    // }

    // public void setPRODUCTWARRANTY(List<productWarranty> pRODUCTWARRANTY) {
    //     PRODUCTWARRANTY = pRODUCTWARRANTY;
    // }

    // public List<productInfo> getPRODUCTINFO() {
    //     return PRODUCTINFO;
    // }

    // public void setPRODUCTINFO(List<productInfo> pRODUCTINFO) {
    //     PRODUCTINFO = pRODUCTINFO;
    // }

    // public List<productImage> getPRODUCTIMAGE() {
    //     return PRODUCTIMAGE;
    // }

    // public void setPRODUCTIMAGE(List<productImage> pRODUCTIMAGE) {
    //     PRODUCTIMAGE = pRODUCTIMAGE;
    // }

    // public Brand getBRAND() {
    //     return BRAND;
    // }

    // public void setBRAND(Brand bRAND) {
    //     BRAND = bRAND;
    // }

    // public List<Category> getCATEGORY() {
    //     return CATEGORY;
    // }

    // public void setCATEGORY(List<Category> cATEGORY) {
    //     CATEGORY = cATEGORY;
    // }

    // ----------------------------------------------------------------------------
    public String getProductLine() {
        return productLine;
    }

    public void setProductLine(String productLine) {
        this.productLine = productLine;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    // public String getBrandID() {
    //     return brandId;
    // }

    // public void setBrandID(String brandID) {
    //     this.brandId = brandID;
    // }

    // public int getCategory() {
    //     return categoryId;
    // }

    // public void setCategory(int categoryId) {
    //     this.categoryId = categoryId;
    // }

}