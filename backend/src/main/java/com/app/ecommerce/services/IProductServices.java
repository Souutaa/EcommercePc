package com.app.ecommerce.services;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.ecommerce.DTO.product.CreateProductRequest;
import com.app.ecommerce.DTO.product.UpdateProductLineRequest;
import com.app.ecommerce.models.Product;

public interface IProductServices {
  public Product create(CreateProductRequest request, MultipartFile thumbnail, MultipartFile[] productImages) throws IOException;
  public Product update(UpdateProductLineRequest request, MultipartFile thumbnail, MultipartFile[] productImages) throws IOException;
  public Product getProduct(String productLine);
  public List<String> getProductImages(String productLine);
  public String getProductThumbnail(String productLine);
  public Product softDelete(String productLine);  
  public Product undoSoftDelete(String productLine);
  
}