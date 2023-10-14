package com.app.ecommerce.models;

import jakarta.persistence.*;

@Entity
@Table(name = "product_info")
public class ProductInfo extends BaseEntity {

    @Column(name = "product_information", nullable = false)
    private String productInformation;

    @ManyToOne(fetch = FetchType.LAZY)
    private Product product;

    public String getProductInformation() {
        return productInformation;
    }

    public void setProductInformation(String productInformation) {
        this.productInformation = productInformation;
    }

}