package com.app.ecommerce.models;

import jakarta.persistence.*;

@Entity
@Table(name = "product_image")
public class ProductImage extends BaseEntity {

    @Id
    @Column(name = "id", length = 11, nullable = false)
    private int id;

    // @Column(name = "product_line", length = 50, nullable = false)
    // private String productLine;

    @Column(name = "path", length = 50, nullable = false)
    private String path;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    // public String getProductLine() {
    //     return productLine;
    // }

    // public void setProductLine(String productLine) {
    //     this.productLine = productLine;
    // }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

}