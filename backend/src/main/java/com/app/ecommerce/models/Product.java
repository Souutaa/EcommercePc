package com.app.ecommerce.models;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "product")
public class Product extends baseEntity {

    @Column(name = "Product_Line", length = 50, nullable = false)
    private String Product_Line;

    @Column(name = "Product_Name", length = 150, nullable = false)
    private String Product_Name;

    @Column(name = "Thumbnail", length = 50, nullable = false)
    private String Thumbnail;

    @Column(name = "Price", length = 10, nullable = false)
    private int Price;

    @Column(name = "Discount", length = 3, nullable = false, columnDefinition = "integer default 0")
    private int Discount;

    @Column(name = "warranty_period", nullable = true)
    private Date warranty_period;

    @Column(name = "Created_by", length = 20, nullable = false)
    private String Created_by;

    @Column(name = "BrandID", length = 10, nullable = false)
    private String BrandID;

    @Column(name = "Category", length = 10, nullable = false)
    private int Category;

    // Mapping -----------------------------------------------------------------
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_BrandID", referencedColumnName = "BrandID")
    private Brand BRAND;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_Category", referencedColumnName = "Category")
    private List<Category> CATEGORY;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_Product_Line", referencedColumnName = "Product_Line")
    private List<productWarranty> PRODUCTWARRANTY;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_Product_Line", referencedColumnName = "Product_Line")
    private List<productInfo> PRODUCTINFO;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_Product_Line", referencedColumnName = "Product_Line")
    private List<productImage> PRODUCTIMAGE;

    public List<productWarranty> getPRODUCTWARRANTY() {
        return PRODUCTWARRANTY;
    }

    public void setPRODUCTWARRANTY(List<productWarranty> pRODUCTWARRANTY) {
        PRODUCTWARRANTY = pRODUCTWARRANTY;
    }

    public List<productInfo> getPRODUCTINFO() {
        return PRODUCTINFO;
    }

    public void setPRODUCTINFO(List<productInfo> pRODUCTINFO) {
        PRODUCTINFO = pRODUCTINFO;
    }

    public List<productImage> getPRODUCTIMAGE() {
        return PRODUCTIMAGE;
    }

    public void setPRODUCTIMAGE(List<productImage> pRODUCTIMAGE) {
        PRODUCTIMAGE = pRODUCTIMAGE;
    }

    public Brand getBRAND() {
        return BRAND;
    }

    public void setBRAND(Brand bRAND) {
        BRAND = bRAND;
    }

    public List<Category> getCATEGORY() {
        return CATEGORY;
    }

    public void setCATEGORY(List<Category> cATEGORY) {
        CATEGORY = cATEGORY;
    }

    // ----------------------------------------------------------------------------
    public String getProduct_Line() {
        return Product_Line;
    }

    public void setProduct_Line(String product_Line) {
        Product_Line = product_Line;
    }

    public String getProduct_Name() {
        return Product_Name;
    }

    public void setProduct_Name(String product_Name) {
        Product_Name = product_Name;
    }

    public String getThumbnail() {
        return Thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        Thumbnail = thumbnail;
    }

    public int getPrice() {
        return Price;
    }

    public void setPrice(int price) {
        Price = price;
    }

    public int getDiscount() {
        return Discount;
    }

    public void setDiscount(int discount) {
        Discount = discount;
    }

    public Date getWarranty_period() {
        return warranty_period;
    }

    public void setWarranty_period(Date warranty_period) {
        this.warranty_period = warranty_period;
    }

    public String getCreated_by() {
        return Created_by;
    }

    public void setCreated_by(String created_by) {
        Created_by = created_by;
    }

    public String getBrandID() {
        return BrandID;
    }

    public void setBrandID(String brandID) {
        BrandID = brandID;
    }

    public int getCategory() {
        return Category;
    }

    public void setCategory(int category) {
        Category = category;
    }

}
