package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "category")
public class Category extends BaseEntity {
    @Id
    @Column(name = "id", length = 11, nullable = false)
    private int id;

    @Column(name = "name", length = 20, nullable = false)
    private String name;

    // Mapping
    @OneToMany(mappedBy = "category")
    private List<Product> products;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}