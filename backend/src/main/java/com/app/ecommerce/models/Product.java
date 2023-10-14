package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "product")
public class Product extends BaseEntity {

    @Column(name = "product_line", length = 50, nullable = false, unique = true)
    private String productLine;

    @Column(name = "product_name", length = 150, nullable = false)
    private String productName;

    @Column(name = "thumbnail", length = 50, nullable = false)
    private String thumbnail;

    @Column(name = "price", length = 10, nullable = false)
    private int price;

    @Column(name = "discount", length = 3, nullable = false, columnDefinition = "integer default 0")
    private int discount;

    // Mapping -----------------------------------------------------------------

    @ManyToOne(fetch = FetchType.LAZY)
    private Brand brand;

    @ManyToOne(fetch = FetchType.LAZY)
    private Category category;

    @OneToMany()
    private List<ProductImage> productImages;

    @OneToMany()
    private List<ProductInfo> productInfos;

    @OneToMany()
    private List<ProductWarranty> productWarranties;

    public Brand getBrand() {
        return this.brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public Category getCategory() {
        return this.category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<ProductImage> getProductImages() {
        return this.productImages;
    }

    public void setProductImages(List<ProductImage> ProductImages) {
        this.productImages = ProductImages;
    }

    public List<ProductInfo> getProductInfos() {
        return this.productInfos;
    }

    public void setProductInfos(List<ProductInfo> ProductInfos) {
        this.productInfos = ProductInfos;
    }

    public List<ProductWarranty> getProductWarranties() {
        return this.productWarranties;
    }

    public void setProductWarranties(List<ProductWarranty> ProductWarranties) {
        this.productWarranties = ProductWarranties;
    }

    @OneToOne(optional=false, fetch=FetchType.LAZY)
    private WarrantyPeriod warrantyPeriod;

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
}