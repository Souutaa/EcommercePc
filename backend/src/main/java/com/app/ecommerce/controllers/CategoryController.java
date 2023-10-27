package com.app.ecommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecommerce.DTO.category.CreateCategoryDTO;
import com.app.ecommerce.DTO.category.UpdateCategoryDTO;
import com.app.ecommerce.models.Category;
import com.app.ecommerce.services.ICategoryServices;

import lombok.RequiredArgsConstructor;

@RestController // This means that this class is a Controller
@RequestMapping(value = "/category") // This means URL's start with /demo (after Application path)
@RequiredArgsConstructor
public class CategoryController {

    @Autowired
    private ICategoryServices categoryServices;

    // Get Category based on active
    // if active == true => getCategory actived
    // if active == false => getAllCategory
    @GetMapping(value = "/allCategory")
    public @ResponseBody ResponseEntity<Object> getAllCategory(@RequestParam boolean active) {
        List<Category> listCategories = categoryServices.getCategories(active);
        return new ResponseEntity<Object>(listCategories, HttpStatus.OK);
    }

    @GetMapping(value = "/getCategoryByName")
    public @ResponseBody ResponseEntity<Object> getAllBrand(@RequestParam String name) {
        Category listCategories = categoryServices.getCategorybyName(name);
        return new ResponseEntity<Object>(listCategories, HttpStatus.OK);
    }

    @PostMapping(value = "/createCategory")
    public ResponseEntity<Category> createBrand(
            @RequestBody CreateCategoryDTO category) {
        return ResponseEntity.ok(categoryServices.saveCategory(category));
    }

    @PatchMapping(value = "/updateCategory/{id}")
    public ResponseEntity<Category> updateBrand(@PathVariable String id,
            @RequestBody UpdateCategoryDTO category) {
        return ResponseEntity.ok(categoryServices.updateCategory(id, category));
    }

    @DeleteMapping(value = "/deleteCategory")
    public void deleteCategory(@RequestParam String id) {
        categoryServices.softDeleteCategory(Integer.parseInt(id));
    }
}
