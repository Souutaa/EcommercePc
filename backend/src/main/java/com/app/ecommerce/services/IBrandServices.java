package com.app.ecommerce.services;

import java.util.List;

import com.app.ecommerce.models.Brand;

public interface IBrandServices {
    public Brand saveBrand(Brand brand);

    public List<Brand> getAllBrands();

    public Brand getBrandbyName(String name);
}
