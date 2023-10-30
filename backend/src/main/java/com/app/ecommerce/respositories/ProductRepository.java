package com.app.ecommerce.respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.ecommerce.models.Product;


public interface ProductRepository extends JpaRepository<Product, Integer> {
  
}