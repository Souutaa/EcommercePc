package com.app.ecommerce.models;

import jakarta.persistence.*;

@Entity
@Table(name = "product_image")
public class ProductImage extends BaseEntity {

    // @Id
    // @Column(name = "id", length = 11, nullable = false)
    // @GeneratedValue(strategy=GenerationType.IDENTITY)
    // private int id;

    @Column(name = "path", length = 50, nullable = false)
    private String path;

    // public int getId() {
    //     return id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

}