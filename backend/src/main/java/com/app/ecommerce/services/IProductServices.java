package com.app.ecommerce.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.ecommerce.DTO.product.CreateProductRequest;
import com.app.ecommerce.models.Product;

public interface IProductServices {
  public Product create(CreateProductRequest request, MultipartFile thumbnail, MultipartFile[] productImages);
  public Product getProduct(String productLine);
  public List<String> getProductImages(String productLine);
  public String getProductThumbnail(String productLine);
}
