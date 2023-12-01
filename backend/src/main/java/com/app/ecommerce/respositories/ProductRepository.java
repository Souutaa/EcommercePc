package com.app.ecommerce.respositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.ecommerce.DTO.product.TopSellingProduct;
import com.app.ecommerce.models.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
  Optional<Product> findByProductLine(String productLine);

  @Query(value = "SELECT product.id as id,product.product_name as productName, product.product_line as productLine, product.price as price ,product.created_at as createdAt, COUNT(product_warranty.product_id) as totalSold "
      + //
      "FROM product_warranty " + //
      "LEFT JOIN product ON product.id = product_warranty.product_id " + //
      "WHERE product_warranty.purchased_at IS NOT NULL " + //
      "GROUP BY  product.id, product.product_name, product.price ,product.created_at " + //
      "ORDER BY product.price DESC, totalSold DESC " + //
      "LIMIT 20", nativeQuery = true)
  List<TopSellingProduct> getTopSellingProduct();
}