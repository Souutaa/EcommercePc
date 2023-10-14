package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "category")
public class Category extends BaseEntity {
    @Column(name = "name", length = 20, nullable = false)
    private String name;

    // Mapping
    @OneToMany(mappedBy = "category")
    private List<Product> products;

    public List<Product> getProducts() {
        return this.products;
    }

    public void setProducts(List<Product> Products) {
        this.products = Products;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}