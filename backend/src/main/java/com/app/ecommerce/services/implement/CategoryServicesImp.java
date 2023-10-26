package com.app.ecommerce.services.implement;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecommerce.DTO.category.CreateCategoryDTO;
import com.app.ecommerce.DTO.category.UpdateCategoryDTO;
import com.app.ecommerce.exceptions.ResourceNotFoundException;
import com.app.ecommerce.models.Category;
import com.app.ecommerce.respositories.CategoryRepository;
import com.app.ecommerce.services.ICategoryServices;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServicesImp implements ICategoryServices {

    @Autowired
    private CategoryRepository repo;

    @Override
    public List<Category> getAllCategory() {
        return repo.findAll();
    }

    @Override
    public List<Category> getCategoryActive() {
        return repo.findAllCategoryActive();
    }

    @Override
    public List<Category> getCategoryNotActive() {
        return repo.findAllCategoryNotActive();
    }

    @Override
    public Category getCategorybyName(String name) {
        Optional<Category> opt = repo.findCategoryByName(name);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            throw new ResourceNotFoundException("Category with name: " + name + " Not Found");
        }
    }

    @Override
    public Category saveCategory(CreateCategoryDTO request) {
        var category = Category.builder().name(request.getNameCategory()).build();
        return repo.save(category);
    }

    @Override
    public Category updateCategory(String id, UpdateCategoryDTO request) {
        Optional<Category> categoryFound = repo.findById(Integer.parseInt(id));
        if (categoryFound.isPresent()) {
            var category = categoryFound.get();
            category.setName(request.getNameCategory().isEmpty() ? category.getName() : request.getNameCategory());
            return repo.save(category);
        } else {
            throw new ResourceNotFoundException("Cannot found brand with id: " + id + " Not Found");
        }
    }

    @Override
    public void softDeleteCategory(int id) {
        Optional<Category> categoryFound = repo.findById(id);
        if (categoryFound.isPresent()) {
            // Create date
            Date date = new Date();
            Timestamp timestamp = new Timestamp(date.getTime());

            // Get value accoutFound
            var category = categoryFound.get();
            category.setDeletedAt(timestamp);
            repo.save(category);
        } else {
            throw new ResourceNotFoundException("Category with Id  : " + id + " Not Found");
        }
    }

}
