package com.app.ecommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecommerce.DTO.brand.CreateBrandRequest;
import com.app.ecommerce.models.Brand;
import com.app.ecommerce.services.IBrandServices;

import lombok.RequiredArgsConstructor;

@RestController // This means that this class is a Controller
@RequestMapping(value = "/brand") // This means URL's start with /demo (after Application path)
@RequiredArgsConstructor
public class BrandController {

    @Autowired
    private IBrandServices brandServices;

    @GetMapping(value = "/allBrand")
    public @ResponseBody ResponseEntity<Object> getAllBrand() {
        List<Brand> listBrand = brandServices.getAllBrands();
        return new ResponseEntity<Object>(listBrand, HttpStatus.OK);
    }

    @GetMapping(value = "/getBrand")
    public @ResponseBody ResponseEntity<Object> getAllBrand(@RequestParam String name) {
        Brand listBrand = brandServices.getBrandbyName(name);
        return new ResponseEntity<Object>(listBrand, HttpStatus.OK);
    }

    @PostMapping(value = "/createBrand")
    public ResponseEntity<Brand> createBrand(
            @RequestBody CreateBrandRequest brand) {
        return ResponseEntity.ok(brandServices.saveBrand(brand));
    }
}
