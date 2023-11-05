package com.app.ecommerce.respositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.ecommerce.models.ProductInfo;

public interface ProductInfoRepository extends JpaRepository<ProductInfo, Integer> {
  @Query(value = "SELECT product_info.product_information FROM public.product_info WHERE product_info.product_id = ?1 " +
                  "AND product_info.deleted_at IS NULL ORDER BY id ASC", nativeQuery = true)
  List<String> getProductInformation(Integer productId);

  @Query(value = "SELECT * FROM public.product_info WHERE product_info.product_id = ?1 " +
                  "AND product_info.deleted_at IS NULL ORDER BY id ASC", nativeQuery = true)
  List<ProductInfo> getProductInformationAllAttributes(Integer productId);
}
