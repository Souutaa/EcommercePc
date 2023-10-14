package com.app.ecommerce.models;

import jakarta.persistence.*;

@Entity
@Table(name = "product_image")
public class ProductImage extends BaseEntity {

    @Column(name = "path", length = 50, nullable = false)
    private String path;

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

}