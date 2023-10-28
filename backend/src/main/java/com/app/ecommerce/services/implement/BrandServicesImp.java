package com.app.ecommerce.services.implement;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecommerce.DTO.brand.CreateBrandDTO;
import com.app.ecommerce.DTO.brand.UpdateBrandDTO;
import com.app.ecommerce.exceptions.ResourceNotFoundException;
import com.app.ecommerce.models.Brand;
import com.app.ecommerce.respositories.BrandRepository;
import com.app.ecommerce.services.IBrandServices;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BrandServicesImp implements IBrandServices {

    @Autowired
    private BrandRepository repo;

    @Override
    public List<Brand> getBrands(boolean active) {
        if (active == true) {
            return repo.findAllBrandlActive();
        }
        return repo.findAll();
    }

    @Override
    public Brand getBrandbyName(String name) {
        Optional<Brand> opt = repo.findBrandByName(name);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            throw new ResourceNotFoundException("Cannot found brand with name: " + name + " Not Found");
        }
    }

    @Override
    public Brand saveBrand(CreateBrandDTO request) {
        var brand = Brand.builder().brandName(request.getBrandName()).build();
        return repo.save(brand);
    }

    @Override
    public Brand updateBrand(String id, UpdateBrandDTO request) {
        Optional<Brand> brandFound = repo.findById(Integer.parseInt(id));
        if (brandFound.isPresent()) {
            var brand = brandFound.get();
            brand.setBrandName(request.getBrandName().isEmpty() ? brand.getBrandName() : request.getBrandName());
            return repo.save(brand);
        } else {
            throw new ResourceNotFoundException("Brand with id: " + id + " Not Found");
        }
    }

    @Override
    public Brand activeBrand(String id) {
        Optional<Brand> brandFound = repo.findById(Integer.parseInt(id));
        if (brandFound.isPresent()) {
            // Get value accoutFound
            var brand = brandFound.get();
            brand.setDeletedAt(null);
            return repo.save(brand);
        } else {
            throw new ResourceNotFoundException("Brand with Id  : " + id + " Not Found");
        }
    }

    @Override
    public void softDeleteBrand(int id) {
        Optional<Brand> brandFound = repo.findById(id);
        if (brandFound.isPresent()) {
            // Create date
            Date date = new Date();
            Timestamp timestamp = new Timestamp(date.getTime());

            // Get value accoutFound
            var brand = brandFound.get();
            brand.setDeletedAt(timestamp);
            repo.save(brand);
        } else {
            throw new ResourceNotFoundException("Brand with Id  : " + id + " Not Found");
        }
    }

}
