package com.app.ecommerce.services;

import com.app.ecommerce.DTO.product.CreateProductRequest;
import com.app.ecommerce.models.Product;

public interface IProductServices {
  public Product create(CreateProductRequest request);

}
