package com.app.ecommerce.services;

import java.util.List;

import com.app.ecommerce.DTO.brand.CreateBrandRequest;
import com.app.ecommerce.models.Brand;

public interface IBrandServices {
    public Brand saveBrand(CreateBrandRequest request);

    public List<Brand> getAllBrands();

    public Brand getBrandbyName(String name);
}
