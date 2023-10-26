package com.app.ecommerce.services.implement;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public Brand saveBrand(Brand request) {
        List<Brand> listBrands = new ArrayList<Brand>();
        var brand = Brand.builder().brandName(request.getBrandName()).build();
        listBrands.add(brand);
        return repo.save(brand);

    }

    @Override
    public List<Brand> getAllBrands() {
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

}
