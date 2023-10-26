package com.app.ecommerce.services;

import java.util.List;

import com.app.ecommerce.DTO.category.CreateCategoryDTO;
import com.app.ecommerce.DTO.category.UpdateCategoryDTO;
import com.app.ecommerce.models.Category;

public interface ICategoryServices {
    public List<Category> getAllCategory();

    public List<Category> getCategoryActive();

    public List<Category> getCategoryNotActive();

    public Category getCategorybyName(String name);

    public Category saveCategory(CreateCategoryDTO request);

    public Category updateCategory(String id, UpdateCategoryDTO request);

    public void softDeleteCategory(int id);
}
