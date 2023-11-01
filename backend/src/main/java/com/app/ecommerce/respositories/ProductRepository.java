package com.app.ecommerce.respositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.ecommerce.models.Product;


public interface ProductRepository extends JpaRepository<Product, Integer> {
  Optional<Product> findByProductLine(String productLine);
}