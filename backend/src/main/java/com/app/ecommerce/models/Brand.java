package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "brand")
public class Brand extends BaseEntity {
    @Id
    @Column(name = "id", length = 11, nullable = false)
    private int id;

    @Column(name = "brand_name", length = 20, nullable = false)
    private String brandName;

    // Mapping
    @OneToMany(mappedBy = "brand")
    private List<Product> products;

    // @OneToOne(mappedBy = "BRAND")
    // private Product PRODUCT;

    // public Product getPRODUCT() {
    //     return PRODUCT;
    // }

    // public void setPRODUCT(Product pRODUCT) {
    //     PRODUCT = pRODUCT;
    // }

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
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }
}
