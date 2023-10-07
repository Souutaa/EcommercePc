package com.app.ecommerce.models;

import jakarta.persistence.*;

@Entity
@Table(name = "product_info")
public class ProductInfo extends BaseEntity {
    // @Id
    // @Column(name = "id", length = 11, nullable = false)
    // @GeneratedValue(strategy=GenerationType.IDENTITY)
    // private int id;

    @Column(name = "product_information", nullable = false)
    private String productInformation;

    @ManyToOne(fetch = FetchType.LAZY)
    private Product product;

    // public int getId() {
    //     return id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    public String getProductInformation() {
        return productInformation;
    }

    public void setProductInformation(String productInformation) {
        this.productInformation = productInformation;
    }

}