package com.app.ecommerce.respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.ecommerce.models.ProductImage;

public interface ProductImageRepository extends JpaRepository<ProductImage, Integer> {
  
}
