package com.app.ecommerce.services;

import java.util.List;

import com.app.ecommerce.DTO.brand.CreateBrandDTO;
import com.app.ecommerce.DTO.brand.UpdateBrandDTO;
import com.app.ecommerce.models.Brand;

public interface IBrandServices {

    public List<Brand> getBrands(boolean active);

    public Brand getBrandbyName(String name);

    public Brand saveBrand(CreateBrandDTO request);

    public Brand updateBrand(String id, UpdateBrandDTO request);

    public Brand activeBrand(String id);

    public void softDeleteBrand(int id);
}
