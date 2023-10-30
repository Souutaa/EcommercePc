package com.app.ecommerce.services;

import org.springframework.web.multipart.MultipartFile;

import com.app.ecommerce.DTO.product.CreateProductRequest;
import com.app.ecommerce.models.Product;

public interface IProductServices {
  public Product create(CreateProductRequest request, MultipartFile thumbnail);

}
