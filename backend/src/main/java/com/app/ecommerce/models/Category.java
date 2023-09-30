package com.app.ecommerce.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "category")
public class Category extends baseEntity {
    @Column(name = "CategoryID", length = 10, nullable = false, unique = true)
    private int CategoryID;

    @Column(name = "CategoryName", length = 20, nullable = false)
    private String CategoryName;

    public int getCategoryID() {
        return CategoryID;
    }

    public void setCategoryID(int categoryID) {
        CategoryID = categoryID;
    }

    public String getCategoryName() {
        return CategoryName;
    }

    public void setCategoryName(String categoryName) {
        CategoryName = categoryName;
    }
}
