package com.app.ecommerce.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "brand")
public class Brand extends baseEntity {

    @Column(name = "BrandID", length = 10, nullable = false, unique = true)
    private String BrandID;

    @Column(name = "BrandName", length = 20, nullable = false)
    private String BrandName;

    // Mapping
    @OneToOne(mappedBy = "BRAND")
    private Product PRODUCT;

    public Product getPRODUCT() {
        return PRODUCT;
    }

    public void setPRODUCT(Product pRODUCT) {
        PRODUCT = pRODUCT;
    }
    //
    // @OneToMany(cascade = CascadeType.ALL)
    // @JoinColumn(name = "fk_BrandID", referencedColumnName = "BrandID")
    // private List<Product> product;

    // public List<Product> getProduct() {
    // return product;
    // }

    // public void setProduct(List<Product> product) {
    // this.product = product;
    // }

    public String getBrandID() {
        return BrandID;
    }

    public void setBrandID(String brandID) {
        BrandID = brandID;
    }

    public String getBrandName() {
        return BrandName;
    }

    public void setBrandName(String brandName) {
        BrandName = brandName;
    }

}
